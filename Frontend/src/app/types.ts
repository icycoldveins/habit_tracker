export interface Habit {
    id: number;
    title: string;
    goal: number; // Change this line
    progress: number; // And this line
    completed: boolean;
    color: string;
  }