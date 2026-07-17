"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">
        🚀 HackMate
      </h1>

      <p className="text-xl text-muted-foreground mb-8">
        Find teammates for your next hackathon
      </p>

      <Link
        href="/login"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Get Started
      </Link>
    </div>
  );
}