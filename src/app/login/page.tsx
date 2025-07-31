// app/login/page.tsx
'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) setMessage('Error: ' + error.message);
    else setMessage('Check your email for the login link!');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="border p-2 w-full mb-2"
      />
      <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2">
        Send Magic Link
      </button>
      <p className="mt-4 text-sm text-gray-600">{message}</p>
    </div>
  );
}
