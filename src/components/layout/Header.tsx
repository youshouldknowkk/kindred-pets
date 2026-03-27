import { Bell, Search } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header({ title }: { title?: string }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-surface/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-on-surface">{title || '亲宠 Kindred'}</h1>
        {!title && <p className="text-xs text-on-surface-variant">连接爱心与责任</p>}
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Search size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full relative">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-tertiary rounded-full border-2 border-surface" />
        </Button>
      </div>
    </header>
  );
}
