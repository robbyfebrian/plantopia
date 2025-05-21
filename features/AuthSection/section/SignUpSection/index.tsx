'use client';

export default function SignUpForm() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Register</h1>
      <form>
        <input type="text" placeholder="Name" className="block border p-2 mb-2 w-full" />
        <input type="email" placeholder="Email" className="block border p-2 mb-2 w-full" />
        <input type="password" placeholder="Password" className="block border p-2 mb-4 w-full" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}
