"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skill } from "@/lib/types";

export function SkillDetailsModal({ skill, isOpen, onClose }: any) {
  if (!skill) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{skill.title}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium">Teacher</h4>
                  <p className="text-sm text-muted-foreground">
                    {skill.teacherName}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Description</h4>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium">Category</h4>
                    <p className="text-sm text-muted-foreground">
                      {skill.category}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Duration</h4>
                    <p className="text-sm text-muted-foreground">
                      {skill.duration} minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
