import {
  BookOpen,
  Brain,
  Flower,
  GraduationCap,
  Leaf,
  RefreshCcw,
  Search,
  Star,
  Stethoscope,
  TestTubeDiagonal,
  ThumbsUp,
  Trophy,
  User,
} from 'lucide-react';
import { JSX } from 'react';

export function getLucideIcon(name: string, achieved: boolean) {
  const color = achieved ? '#fff' : '#E1E1E1';
  const icons: Record<string, JSX.Element> = {
    leaf: <Leaf size={32} color={color} />,
    refresh: <RefreshCcw size={32} color={color} />,
    graduation: <GraduationCap size={32} color={color} />,
    flower: <Flower size={32} color={color} />,
    stetoschope: <Stethoscope size={32} color={color} />,
    brain: <Brain size={32} color={color} />,
    search: <Search size={32} color={color} />,
    thumbs: <ThumbsUp size={32} color={color} />,
    tube: <TestTubeDiagonal size={32} color={color} />,
    star: <Star size={32} color={color} />,
    trophy: <Trophy size={32} color={color} />,
    user: <User size={32} color={color} />,
    book: <BookOpen size={32} color={color} />,
  };
  return icons[name] || <User size={32} color={color} />;
}
