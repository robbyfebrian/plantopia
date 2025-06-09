'use client';

import { MissionTabProps } from './type';

const MissionTabs: React.FC<MissionTabProps> = ({
  selected,
  onSelect,
  tabItems,
}) => {
  return (
    <div className='flex gap-2 mb-6'>
      {tabItems.map((tab) => {
        const isSelected = selected.includes(tab.label);
        return (
          <button
            key={tab.label}
            onClick={() => onSelect(tab.label)}
            className={`flex gap-1 items-center px-4 py-1 text-sm rounded-md border transition ${
              isSelected
                ? 'bg-[#EFF1ED] text-[#4E6148] font-medium border-[#4E6148]'
                : 'bg-white text-[#E1E1E1] font-light border-[#E1E1E1]'
            }`}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default MissionTabs;
