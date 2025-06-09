export type MissionTab = 'Harian' | 'Mingguan' | 'Milestone' | 'Eksploratif';

export type MissionTabItem = {
  label: MissionTab;
  icon?: React.ReactNode;
};

export type MissionTabProps = {
  selected: MissionTab[];
  onSelect: (key: MissionTab) => void;
  tabItems: MissionTabItem[];
};

export type MissionCardProps = {
  title: string;
  description: string;
  exp: number;
  completed: boolean;
};

export type MissionData = Omit<MissionCardProps, 'dropdownContent'>;