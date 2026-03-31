export interface Participant {
  id: string;
  name: string;
  golfboxNumber: string;
  registeredAt: string;
  imageUrl?: string;
  caddyName?: string;
}

export interface Hole {
  number: number;
  name?: string;
  par: number;
  lengthMeters: number;
  handicap: number;
  description: string;
  videoUrl?: string;
  imageUrl?: string;
}
