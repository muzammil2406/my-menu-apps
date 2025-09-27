'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DrawerFlow } from '@/components/drawer/drawer-flow';

export default function Home() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 flex items-center justify-center">
        <Button
          size="lg"
          onClick={() => setDrawerOpen(true)}
        >
          Open Menu
        </Button>
      </main>
      <DrawerFlow isOpen={isDrawerOpen} onOpenChange={setDrawerOpen} />
    </div>
  );
}
