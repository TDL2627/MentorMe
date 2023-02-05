import { useState } from "react";
import { useAccountStore } from "../../../store";

export function Login() {
  const { login } = useAccountStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let person = {};
    person.email = email;
    person.password = password;
    login(person);
    // Make a request to the backend to authenticate the user here
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
      <h1 className="text-lg font-medium mb-4">Login</h1>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="border border-gray-400 rounded p-2 w-full"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="border border-gray-400  rounded p-2 w-full"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
      >
        Login
      </button>
    </form>
  );
}
