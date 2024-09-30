import { useQuery } from "@tanstack/react-query";
import { User } from "../types/User";

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(`https://randomuser.me/api/?page=1&results=100`);
  if (!response.ok) {
    throw new Error("Error fetching users");
  }
  const data = await response.json();
  return data.results;
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users", 1],
    queryFn: () => fetchUsers(),
  });
};
