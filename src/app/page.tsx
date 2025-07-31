'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 text-gray-800 p-8">
      <header className="flex flex-col items-center gap-2 mb-10">
        <Image
          src="/mental-health-icon.png"
          alt="Mental Health Logo"
          width={60}
          height={60}
        />
        <h1 className="text-4xl font-extrabold text-purple-700">
          AI Mental Health Tracker
        </h1>
        <p className="text-center text-sm text-gray-600 max-w-xl">
          Your personal wellness companion — powered by AI & designed to help you track, reflect, and grow every day.
        </p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card
          title="🧠 Mood Tracker"
          description="Log your mood daily and spot emotional patterns over time."
          href="/mood"
          color="bg-purple-200"
        />
        <Card
          title="📓 Journal"
          description="Reflect your thoughts in a safe space. Private & secure."
          href="/journal"
          color="bg-pink-200"
        />
        <Card
          title="💬 Talk to AI"
          description="Ask mental health-related questions and get AI-powered guidance."
          href="/chat"
          color="bg-blue-200"
        />
        <Card
          title="📈 Progress"
          description="See charts of how your mental health evolves over time."
          href="/progress"
          color="bg-yellow-200"
        />
        <Card
          title="🧘 Breathing Exercises"
          description="Quick guided breathing sessions to relax your mind."
          href="/breathing"
          color="bg-green-200"
        />
        <Card
          title="📅 Daily Check-in"
          description="Answer a few questions daily to stay mindful & consistent."
          href="/check-in"
          color="bg-orange-200"
        />
      </main>

      <footer className="mt-16 text-center text-sm text-gray-500">
        Made by Hamza | Powered by Supabase, MongoDB, Vercel
      </footer>
    </div>
  );
}

function Card({
  title,
  description,
  href,
  color,
}: {
  title: string;
  description: string;
  href: string;
  color: string;
}) {
  return (
    <Link
      href={href}
      className={`rounded-2xl shadow-md p-6 hover:scale-[1.03] hover:shadow-lg transition-all duration-200 ${color}`}
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm">{description}</p>
    </Link>
  );
}
