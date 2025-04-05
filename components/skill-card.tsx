"use client";

import { motion } from "framer-motion";
import { Bookmark } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSkills } from "@/context/skill-context";
import { Skill } from "@/lib/types";

interface SkillCardProps {
  skill: Skill;
  onSelect: (skill: Skill) => void;
}

export function SkillCard({ skill, onSelect }: SkillCardProps) {
  const { bookmarkedSkills, toggleBookmark } = useSkills();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="cursor-pointer group" onClick={() => onSelect(skill)}>
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark(skill.id);
            }}
          >
            <Bookmark
              className={`h-5 w-5 ${
                bookmarkedSkills.has(skill.id) ? "fill-primary" : "fill-none"
              }`}
            />
          </Button>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {skill.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">by {skill.teacherName}</p>
            <p className="text-sm line-clamp-2">{skill.description}</p>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {skill.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {skill.duration} minutes
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}