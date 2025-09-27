import type { LucideIcon } from 'lucide-react';

export interface MenuItem {
  id: string;
  title: string;
  icon?: LucideIcon;
  children?: MenuItem[];
  href?: string;
  parentId?: string | null;
}

export interface MenuView {
  id: string;
  title: string;
  items: MenuItem[];
  parentId?: string | null;
}
