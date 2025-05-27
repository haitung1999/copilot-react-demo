export interface User {
  id: number;
  name: string;
  email: string;
}

export const filterUsers = (users: User[], searchTerm: string): User[] => {
  return users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
