import React, { useState } from 'react';

interface SignUpPageProps {
  onNavigate: (page: 'login' | 'home') => void;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ onNavigate }) => {
  // State to hold form data and feedback messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Get the API URL from environment variables
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    // Basic validation
    if (!name || !email || !password) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/users/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // We send the user data in the required format
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          // For now, we'll hardcode some default values
          department: "Sales", 
          title: "Sales Representative"
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If the API returns an error (like "Email already registered")
        throw new Error(data.detail || 'Something went wrong');
      }

      // On success
      setSuccess("Account created successfully! Please log in.");
      setTimeout(() => onNavigate('login'), 2000); // Redirect to login after 2 seconds

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-20 min-h-[calc(100vh-140px)]">
      <div className="w-full max-w-md p-8 space-y-8 bg-slate-800 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Create your Norvorx account
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Or{' '}
            <button
              onClick={() => onNavigate('login')}
              className="font-medium text-indigo-400 hover:text-indigo-500 focus:outline-none"
            >
              login to your existing account
            </button>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* We've removed the action and method attributes */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="full-name" className="sr-only">
                Full name
              </label>
              <input
                id="full-name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-700 bg-slate-900 text-gray-100 placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="email-address-signup" className="sr-only">
                Email address
              </label>
              <input
                id="email-address-signup"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-700 bg-slate-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password-signup" className="sr-only">
                Password
              </label>
              <input
                id="password-signup"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-700 bg-slate-900 text-gray-100 placeholder-gray-500 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-400 text-center">{error}</p>}
          {success && <p className="text-sm text-green-400 text-center">{success}</p>}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-indigo-500 transition-colors disabled:bg-indigo-400"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;