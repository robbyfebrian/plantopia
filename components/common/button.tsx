import Link from "next/link";
import { ButtonProps } from "./type";

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  onClick,
  variant = 'primary',
}) => {
  const baseStyles =
    'px-9 py-3 rounded-full font-prata text-white';
  const primaryStyles =
    'bg-[#4e6148] hover:bg-[#34432f] focus:ring-green-700 transition-colors duration-300 shadow-[0_0_20px_rgba(93,120,79,0.6)]';
  const secondaryStyles =
    'bg-none border border-white transition-colors duration-300 hover:bg-[#000000]/25 shadow-[0_0_20px_rgba(93,120,79,0.6)]';

  const styles =
    variant === 'primary'
      ? `${baseStyles} ${primaryStyles}`
      : `${baseStyles} ${secondaryStyles}`;

  return href ? (
    <Link className={styles} href={href}>
      {label}
    </Link>
  ) : (
    <button className={styles} onClick={onClick} type="button">
      {label}
    </button>
  );
};

export default Button;
