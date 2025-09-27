import { Waypoints } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 font-headline text-xl font-bold">
      <Waypoints className="h-6 w-6 text-primary-foreground" />
      <span className="text-primary-foreground">DrawerFlow</span>
    </div>
  );
}
