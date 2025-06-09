export type PlantCardProps = {
  name: string;
  dateAdded: string;
  imageUrl: string;
  condition: 'Sehat' | 'Perlu Penanganan';
  onClick?: () => void;
};
