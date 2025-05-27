import React from "react";

interface UserCardProps {
  name: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
  console.log("abc");

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-xs mx-auto">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

export default UserCard;
