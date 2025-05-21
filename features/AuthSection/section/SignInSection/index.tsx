'use client';

export default function SignInForm() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <form>
        <input type="email" placeholder="Email" className="block border p-2 mb-2 w-full" />
        <input type="password" placeholder="Password" className="block border p-2 mb-4 w-full" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
