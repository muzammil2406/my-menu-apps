
'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Search, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { menuData } from '@/lib/menu-data';
import type { MenuItem, MenuView } from '@/types';
import { Separator } from '../ui/separator';

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

function findMenuItemById(items: MenuItem[], id: string): MenuItem | undefined {
  for (const item of items) {
    if (item.id === id) return item;
    if (item.children) {
      const found = findMenuItemById(item.children, id);
      if (found) return found;
    }
  }
  return undefined;
}

function DrawerContent({ onOpenChange, closeDrawer }: { onOpenChange: (open: boolean) => void, closeDrawer: () => void }) {
  const [[currentView, direction], setViewState] = useState<[MenuView, number]>([
    { id: 'root', title: 'Menu', items: menuData, parentId: null },
    0
  ]);
  const [history, setHistory] = useState<string[]>(['root']);
  const [searchTerm, setSearchTerm] = useState('');

  const navigateTo = (itemId: string) => {
    const item = findMenuItemById(menuData, itemId);

    if (item?.children) {
      setViewState([
        { id: item.id, title: item.title, items: item.children, parentId: currentView.id },
        1
      ]);
      setHistory(prev => [...prev, item.id]);
    } else if (item?.href) {
      // In a real app, you would use Next's router here
      window.location.href = item.href;
      closeDrawer();
    }
  };

  const navigateBack = () => {
    if (history.length <= 1) return;

    const newHistory = history.slice(0, -1);
    const parentId = newHistory[newHistory.length - 1];

    let parentItem;
    if (parentId === 'root') {
      parentItem = { id: 'root', title: 'Menu', children: menuData, parentId: null };
    } else {
      parentItem = findMenuItemById(menuData, parentId);
    }
    
    if (!parentItem || !parentItem.children) return;

    setViewState([
      { id: parentItem.id, title: parentItem.title, items: parentItem.children, parentId: newHistory.length > 1 ? newHistory[newHistory.length - 2] : null },
      -1
    ]);
    setHistory(newHistory);
  };

  const searchResults = useMemo(() => {
    if (!searchTerm) return [];
    const results: (MenuItem & { path: string[] })[] = [];
    const search = (items: MenuItem[], path: string[]) => {
      for (const item of items) {
        const newPath = [...path, item.title];
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          results.push({ ...item, path: newPath });
        }
        if (item.children) {
          search(item.children, newPath);
        }
      }
    };
    search(menuData, []);
    return results;
  }, [searchTerm]);

  return (
    <>
      <SheetHeader className="p-4 border-b">
        <AnimatePresence mode="wait">
          <motion.div
            key={searchTerm ? 'search' : currentView.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <SheetTitle className="font-sans">
              {searchTerm ? 'Search Results' : currentView.title === 'Menu' ? 'Main Menu' : currentView.title}
            </SheetTitle>
          </motion.div>
        </AnimatePresence>
      </SheetHeader>

      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search menu items"
          />
          {searchTerm && (
            <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7" onClick={() => setSearchTerm('')}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentView.id + (searchTerm ? '_search' : '')}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 flex flex-col"
          >
            {currentView.id !== 'root' && !searchTerm && (
              <SheetHeader className="p-4 border-b flex flex-row items-center space-y-0">
                <Button variant="ghost" size="icon" onClick={navigateBack} className="mr-2" aria-label="Go back">
                  <ArrowLeft />
                </Button>
                <SheetTitle className="font-sans">{currentView.title}</SheetTitle>
              </SheetHeader>
            )}

            <ScrollArea className="flex-1">
              {searchTerm ? (
                <div className="p-2">
                  {searchResults.length > 0 ? (
                    searchResults.map(item => (
                      <Button
                        key={item.id}
                        variant="ghost"
                        className="w-full justify-start h-auto py-2 flex-col items-start"
                        onClick={() => {
                          if (item.href) {
                            window.location.href = item.href;
                            closeDrawer();
                          } else {
                            navigateTo(item.id);
                            setSearchTerm('');
                          }
                        }}
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.path.slice(0, -1).join(' > ')}</div>
                      </Button>
                    ))
                  ) : (
                    <p className="text-center text-muted-foreground p-8">No results found.</p>
                  )}
                </div>
              ) : (
                <>
                  {currentView.id === 'root' && <Separator className="my-2" />}
                  <ul className="p-2">
                    {currentView.items.map(item => (
                      <li key={item.id}>
                        <Button
                          variant="ghost"
                          className="w-full justify-between"
                          onClick={() => navigateTo(item.id)}
                          aria-label={item.title}
                        >
                          <div className="flex items-center gap-2">
                            {item.icon && <item.icon className="h-4 w-4 text-muted-foreground" />}
                            <span>{item.title}</span>
                          </div>
                          {item.children && <ChevronRight className="h-4 w-4" />}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </ScrollArea>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export function DrawerFlow({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (open: boolean) => void }) {
  const resetDrawer = useCallback(() => {
    // We don't need to do anything here anymore as the state is managed within DrawerContent
  }, []);

  const handleOpenChange = (open: boolean) => {
    onOpenChange(open);
    if (!open) {
      setTimeout(resetDrawer, 300);
    }
  };

  const closeDrawer = () => handleOpenChange(false);

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent side="bottom" className="w-full h-3/4 p-0 flex flex-col gap-0" aria-label="Main Menu">
        {isOpen && <DrawerContent onOpenChange={onOpenChange} closeDrawer={closeDrawer} />}
      </SheetContent>
    </Sheet>
  );
}
