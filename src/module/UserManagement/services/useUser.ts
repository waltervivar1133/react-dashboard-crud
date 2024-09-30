import { useQuery } from "@tanstack/react-query";
import { User } from "../types/User";

const fetchUsers = async (
  nat: string | null,
  gender?: string | null
): Promise<User[]> => {
  const url = new URL("https://randomuser.me/api/?page=1&results=100");

  if (nat) {
    url.searchParams.append("nat", nat);
  }

  if (gender) {
    url.searchParams.append("gender", gender);
  }
  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("Error fetching users");
  }
  const data = await response.json();
  return data.results;
};

export const useUsers = (nat: string | null, gender: string | null) => {
  return useQuery({
    queryKey: ["users", nat, gender],
    queryFn: () => fetchUsers(nat, gender),
    staleTime: 5 * 60 * 1000
    
  });
};
