export type Overview = {
  user: {
    id: string;
    username: string;
    level: number;
    xp: number;
    streakCount: number;
  };
  lastAchievement: any;
  totalCollectedPlants: number;
  plantCollection: any[];
  totalDiseasesFound: number;
  todayMissions: any[];
};
