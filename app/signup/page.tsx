"use client";

import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");

  const handleSignup = async () => {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        skills,
      }),
    });

    const data = await res.json();
    console.log(data);
    alert("User created!");
  };

  return (
    <div className="p-10 flex flex-col gap-4 max-w-md">
      <input
        placeholder="Name"
        className="border p-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        className="border p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Skills"
        className="border p-2"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />

      <button
        onClick={handleSignup}
        className="bg-blue-600 text-white p-2 rounded"
      >
        Create Account
      </button>
    </div>
  );
}