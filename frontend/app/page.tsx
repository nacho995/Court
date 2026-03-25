'use client'

import {useEffect, useState} from "react";

export default function Home() {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [input, setInput] = useState('');

  async function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      if (!input.trim() || loading) return;

      setMessages(prev => [...prev, {role: 'user', content: input}]);
      setInput('');
      setLoading(true);

      const response = await fetch('http://localhost:3000/api/ai/chat', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({question: input}),
      })
      const data = await response.text();
      setMessages(prev => [...prev, {role: 'assistant', content: data}]);
      setLoading(false);
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
              <label>Ask me anything</label>
              <input value={input} onChange={(e) => setInput(e.target.value)} className="border border-gray-300 rounded-lg p-2"/>
              <button type="submit">Send</button>
              </form>
          <div className="flex flex-col gap-4">
            {messages.map((item, index) => (
              <div key={index} className={`flex ${item.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-lg px-4 py-2 ${item.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
      </main>
    </div>
  );
}
