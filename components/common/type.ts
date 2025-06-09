export type ButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

export type SearchProps = {
  placeholder: string;
  onSearch?: (query: string) => void;
  className?: string;
};
