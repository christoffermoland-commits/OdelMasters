export interface Flight {
  teeTime: string;
  group: number;
  name?: string;
  players: string[];
}

export const flights: Flight[] = [
  {
    teeTime: "14:20",
    group: 1,
    players: ["Karsten", "Duc", "Odd Arne"],
  },
  {
    teeTime: "14:30",
    group: 2,
    players: ["Frode", "Trygve", "Robert"],
  },
  {
    teeTime: "14:40",
    group: 3,
    players: ["Øyvind", "Jens", "Kenneth", "Thomas"],
  },
  {
    teeTime: "14:50",
    group: 4,
    name: "Champions Flight",
    players: ["Christoffer", "Andreas", "Jørn", "Eljar"],
  },
];
