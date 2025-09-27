import jsonData from './data.json';
import { iconMap } from '../lib/icon';
import { MenuItem } from '@/types';

type JsonMenuItem = Omit<MenuItem, 'icon' | 'children'> & {
  icon?: string;
  children?: JsonMenuItem[];
};

function processMenuItems(items: JsonMenuItem[]): MenuItem[] {
  return items.map(item => ({
    id: item.id,
    href: item.href,
    title: item.title,
    parentId: item.parentId ?? null,
    icon: item.icon ? iconMap[item.icon] : undefined,
    children: item.children ? processMenuItems(item.children) : undefined,
  }));
}

export const menuData: MenuItem[] = processMenuItems(jsonData);