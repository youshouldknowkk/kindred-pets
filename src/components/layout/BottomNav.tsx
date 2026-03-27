import { NavLink } from 'react-router-dom';
import { Home, Heart, Calendar, BookOpen, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { icon: Home, label: '发现', path: '/' },
  { icon: Heart, label: '领养', path: '/adopt' },
  { icon: Calendar, label: '健康', path: '/health' },
  { icon: BookOpen, label: '日记', path: '/diary' },
  { icon: User, label: '我的', path: '/profile' },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface-container-lowest/80 backdrop-blur-xl border-t border-outline-variant/10 px-6 pb-safe pt-3 z-50">
      <div className="flex justify-between items-center max-w-lg mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }: { isActive: boolean }) =>
              cn(
                "flex flex-col items-center gap-1 transition-all duration-300",
                isActive ? "text-primary scale-110" : "text-on-surface-variant hover:text-on-surface"
              )
            }
          >
            {({ isActive }: { isActive: boolean }) => (
              <>
                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
