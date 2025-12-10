import { auth } from "@/auth";
import { AnimatedGridPattern } from "@workspace/ui/components/animated-grid-pattern";
import { AuroraText } from "@workspace/ui/components/aurora-text";
import { cn } from "@workspace/ui/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function HeroSection() {
  const session = await auth();
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
      <AnimatedGridPattern
        height={50}
        width={50}
        numSquares={30}
        maxOpacity={0.2}
        duration={3}
        repeatDelay={1}
        className={cn(
          "max-h-screen md:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "inset-x-0 h-[200%]"
        )}
      />
      {/* <AnimatedGrid /> */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">
          ✨ Create and Join Rooms Quickly
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
          Instant Chat Rooms for <br className="hidden md:block" />
          Real <AuroraText>Conversations.</AuroraText>
        </h1>
        <p className="text-sm md:text-lg text-gray-400 mb-8 max-w-lg mx-auto">
          Create a room, share the room code, and start chatting instantly. No
          hassle, just pure communication.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {session ? (
            <Link href={"/dashboard"}>
              <button className="px-4 py-2 cursor-pointer bg-gradient-to-r from-blue-500 to-pink-500 rounded-xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
                Dashboard <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          ) : (
            <Link href={"/signin"}>
              <button className="px-4 py-2 cursor-pointer bg-gradient-to-r from-blue-500 to-pink-500 rounded-xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
                Start Chatting <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          )}
          <button className="px-4 py-2 cursor-pointer border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
