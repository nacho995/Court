'use client'

import {useEffect, useState} from "react";

export default function Home() {
  const [result, setResult] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3000/api/health')
      .then(res => res.json())
      .then(data => setResult(data.status))
  }, [])
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          { result ? <p>Server is up and running</p> : <p>Server is down</p>}
      </main>
    </div>
  );
}
