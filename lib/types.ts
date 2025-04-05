export interface Skill {
  id: string;
  title: string;
  teacherName: string;
  description: string;
  category: string;
  duration: number;
  thumbnail?: string;
  createdAt: string;
}

export type Category = 'Design' | 'Development' | 'Marketing' | 'Business' | 'Other';

export const categories: Category[] = ['Design', 'Development', 'Marketing', 'Business', 'Other'];