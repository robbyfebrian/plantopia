import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { SidebarProps } from './type';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC<SidebarProps> = ({
  buttonLabel,
  onButtonClick,
  navItems,
}) => {
  const pathname = usePathname();

  return (
    <aside className='min-h-screen bg-white text-black flex flex-col py-9 border-r border-[#B5B5B5]'>
      <div className='px-6'>
        <button
          className='mb-8 py-2 min-w-52 text-white font-semibold px-4 bg-[#4e6148] hover:bg-[#34432f] focus:ring-green-700 transition-colors duration-300 rounded-lg'
          onClick={onButtonClick}
        >
          <Plus size={18} className='inline mr-2' />
          {buttonLabel}
        </button>
      </div>
      <nav className='flex flex-col gap-2'>
        {navItems.map((item, idx) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={idx}
              href={item.href}
              className={`flex items-center gap-4 py-2 px-8 transition
                ${
                  isActive
                    ? 'bg-[#4e6148] text-white'
                    : 'hover:bg-[#4e6148] hover:text-white'
                }
              `}
            >
              {item.icon && <span>{item.icon}</span>}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
