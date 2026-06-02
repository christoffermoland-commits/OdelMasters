export interface Flight {
  teeTime: string;
  group: number;
  players: string[];
}

export const flights: Flight[] = [
  {
    teeTime: "14:20",
    group: 1,
    players: ["Spiller 1", "Spiller 2", "Spiller 3"],
  },
  {
    teeTime: "14:30",
    group: 2,
    players: ["Spiller 4", "Spiller 5", "Spiller 6"],
  },
  {
    teeTime: "14:40",
    group: 3,
    players: ["Spiller 7", "Spiller 8", "Spiller 9", "Spiller 10"],
  },
  {
    teeTime: "14:50",
    group: 4,
    players: ["Spiller 11", "Spiller 12", "Spiller 13", "Spiller 14"],
  },
];
