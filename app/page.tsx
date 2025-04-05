import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="relative isolate">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Share Your Skills,
            <br />
            Expand Your Knowledge
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            SkillSwap is a marketplace for micro-learning experiences. Teach
            what you know, learn what you don't. Connect with others in quick,
            focused learning sessions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/post">
                Post a Skill <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/browse">Browse Skills</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-2xl bg-primary/5 p-3">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-sm font-semibold">Quick Sessions</h3>
              <p className="mt-2 text-muted-foreground">
                Learn new skills in 30-minute focused sessions
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-2xl bg-primary/5 p-3">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-sm font-semibold">Peer Learning</h3>
              <p className="mt-2 text-muted-foreground">
                Connect with others who share your interests
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-2xl bg-primary/5 p-3">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-sm font-semibold">Diverse Topics</h3>
              <p className="mt-2 text-muted-foreground">
                From design to development, marketing to business
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
