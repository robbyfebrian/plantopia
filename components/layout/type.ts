export type navbarProps = {
  style?: string;
};

export type SidebarNavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export type SidebarProps = {
  buttonLabel: string;
  onButtonClick: () => void;
  navItems: SidebarNavItem[];
};
