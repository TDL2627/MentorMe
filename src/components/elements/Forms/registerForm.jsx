import { useState } from 'react';

export function Register  ()  {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("name: ", name);
    console.log("surname: ", surname);
    console.log("role: ", role);
    console.log("email: ", email);
    console.log("password: ", password);
    // Make a request to the backend to register the user here
  }
  return(<>
  <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
      <h1 className="text-lg font-medium mb-4">Register</h1>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="surname">
          Surname
        </label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="text"
          id="surname"
          value={surname}
          onChange={e => setSurname(e.target.value)}
          required
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="role">
          Role
        </label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="text"
          id="role"
          value={role}
          onChange={e => setRole(e.target.value)}
          required
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
        Register
      </button>
      
</form>
  </>)
}