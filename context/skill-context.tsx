'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { Skill } from '@/lib/types';

interface SkillContextType {
  skills: Skill[];
  addSkill: (skill: Omit<Skill, 'id' | 'createdAt'>) => void;
  bookmarkedSkills: Set<string>;
  toggleBookmark: (skillId: string) => void;
}

const SkillContext = createContext<SkillContextType | undefined>(undefined);

export function SkillProvider({ children }: { children: React.ReactNode }) {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [bookmarkedSkills, setBookmarkedSkills] = useState<Set<string>>(new Set());

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarkedSkills');
    if (savedBookmarks) {
      setBookmarkedSkills(new Set(JSON.parse(savedBookmarks)));
    }
  }, []);

  const addSkill = (newSkill: Omit<Skill, 'id' | 'createdAt'>) => {
    const skill: Skill = {
      ...newSkill,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setSkills((prev) => [skill, ...prev]);
  };

  const toggleBookmark = (skillId: string) => {
    setBookmarkedSkills((prev) => {
      const next = new Set(prev);
      if (next.has(skillId)) {
        next.delete(skillId);
      } else {
        next.add(skillId);
      }
      localStorage.setItem('bookmarkedSkills', JSON.stringify([...next]));
      return next;
    });
  };

  return (
    <SkillContext.Provider value={{ skills, addSkill, bookmarkedSkills, toggleBookmark }}>
      {children}
    </SkillContext.Provider>
  );
}

export function useSkills() {
  const context = useContext(SkillContext);
  if (context === undefined) {
    throw new Error('useSkills must be used within a SkillProvider');
  }
  return context;
}