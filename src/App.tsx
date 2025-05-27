import React, { useState } from "react";
import { users } from "./data/users";
import { filterUsers } from "./utils/filterUsers";
import UserCard from "./components/UserCard";

const App = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = filterUsers(users, search);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Copilot React Demo</h1>
      <input
        type="text"
        placeholder="Tìm kiếm theo tên..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} name={user.name} email={user.email} />
        ))}
        {filteredUsers.length === 0 && (
          <div className="text-gray-500">Không tìm thấy người dùng.</div>
        )}
      </div>
    </div>
  );
};

export default App;
