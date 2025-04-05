"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSkills } from "@/context/skill-context";
import { categories } from "@/lib/types";

const formSchema = z.object({
  teacherName: z.string().min(2, "Name must be at least 2 characters"),
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  category: z.enum(categories as [string, ...string[]]),
  duration: z.coerce
    .number()
    .min(5, "Duration must be at least 5 minutes")
    .max(120, "Duration cannot exceed 120 minutes"),
});

export function PostForm() {
  const router = useRouter();
  const { toast } = useToast();
  const { addSkill } = useSkills();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teacherName: "",
      title: "",
      description: "",
      category: "Other",
      duration: 30,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addSkill(values);
    toast({
      title: "Skill posted successfully!",
      description: "Your skill has been added to the marketplace.",
    });
    router.push("/browse");
  }

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-white">
        Post a Micro Skill
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="teacherName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Your Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    className="focus:ring-2 focus:ring-primary border-zinc-300 dark:border-zinc-700"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Skill Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Learn Figma Basics"
                    className="focus:ring-2 focus:ring-primary border-zinc-300 dark:border-zinc-700"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What will you teach in this session?"
                    className="resize-none h-28 focus:ring-2 focus:ring-primary border-zinc-300 dark:border-zinc-700"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="focus:ring-2 focus:ring-primary border-zinc-300 dark:border-zinc-700">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">
                    Duration (minutes)
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={5}
                      max={120}
                      className="focus:ring-2 focus:ring-primary border-zinc-300 dark:border-zinc-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full text-base py-6">
            🚀 Post Skill
          </Button>
        </form>
      </Form>
    </div>
  );
}
