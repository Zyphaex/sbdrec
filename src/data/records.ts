export interface Lifter {
  name: string;
  squat: number;
  bench: number;
  deadlift: number;
  country?: string;
  weight?: number;
}

export const lifters: Lifter[] = [
  {
    name: "Sam Hillier",
    squat: 140,
    bench: 110,
    deadlift: 180,
    country: "United Kingdom",
    weight: 70,
  },
  {
    name: "Jane Smith",
    squat: 120,
    bench: 85,
    deadlift: 150,
    country: "United States",
    weight: 63,
  },
  {
    name: "Alex Johnson",
    squat: 130,
    bench: 90,
    deadlift: 160,
    country: "Canada",
    weight: 74,
  },
  {
    name: "Chris Lee",
    squat: 125,
    bench: 95,
    deadlift: 170,
    country: "South Korea",
    weight: 93,
  },
];
