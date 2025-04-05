"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSkills } from "@/context/skill-context";
import { categories } from "@/lib/types";
import { SkillCard } from "@/components/skill-card";
import { SkillDetailsModal } from "@/components/skill-details-modal";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function BrowsePage() {
  const { skills } = useSkills();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredSkills = skills.filter((skill) => {
    const matchesSearch = skill.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "all" ||
      skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value === "all" ? null : value);
  };

  const handleReset = () => {
    setSearch("");
    setSelectedCategory(null);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Page Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Browse Micro-Skills
          </h1>
          <p className="mt-2 text-muted-foreground text-sm">
            Find quick lessons to level up your knowledge in minutes.
          </p>
        </div>

        {/* Filter Section */}
        <Card className="p-6 border border-border shadow-sm sticky top-20 z-10 backdrop-blur bg-background/80 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Input
              placeholder="🔍 Search skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:max-w-md ring-1 ring-zinc-200 focus:ring-ring focus:outline-none transition rounded-lg"
            />
            <Select
              value={selectedCategory || "all"}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger className="w-full md:max-w-[200px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {(search || selectedCategory) && (
              <button
                onClick={handleReset}
                className="text-sm text-muted-foreground underline hover:text-foreground transition"
              >
                Clear Filters
              </button>
            )}
          </div>
        </Card>

        {/* Grid + Animation */}
        {filteredSkills.length === 0 ? (
          <Card className="border-dashed border-2 border-zinc-300 dark:border-zinc-700 rounded-xl">
            <CardContent className="py-20 text-center space-y-3 animate-fade-in">
              <p className="text-4xl">😕</p>
              <p className="text-muted-foreground">No results found.</p>
              <p className="text-sm text-muted-foreground">
                Try a different keyword or category.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="transition-all duration-200 hover:shadow-md hover:scale-[1.02] hover:bg-muted rounded-xl p-1 animate-fade-in"
              >
                <SkillCard
                  skill={skill}
                  onSelect={(skill) => {
                    setSelectedSkill(skill);
                    setIsModalOpen(true);
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
