import { useState, useEffect } from "react";
import { User } from "@/module/UserManagement/types/User";
import { matchString } from "../utils/matchString";

const filterUsers = (users: User[], searchTerm: string): User[] => {
  return users.filter(
    (user) =>
      matchString(user.location.country, searchTerm) ||
      matchString(user.name.first, searchTerm) ||
      matchString(user.name.last, searchTerm) ||
      matchString(user.gender, searchTerm) ||
      matchString(user.location.street.name, searchTerm) ||
      matchString(user.location.street.number, searchTerm) ||
      matchString(user.email, searchTerm) ||
      matchString(user.phone, searchTerm)
  );
};

export const useFilteredUsers = (
  users: User[] | undefined,
  resetPage: () => void
) => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    if (users) {
      setFilteredUsers(users);
    }
  }, [users]);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm === "") {
      setFilteredUsers(users || []);
    } else {
      const filtered = filterUsers(users || [], searchTerm);
      setFilteredUsers(filtered);
    }
    resetPage();
  };

  const filterByNatAndGender = (nat: string | null, gender: string | null) => {
    let filtered = users || [];
    if (nat) {
      filtered = filtered.filter(
        (user) => user.nat.toLowerCase() === nat.toLowerCase()
      );
    }
    if (gender) {
      filtered = filtered.filter(
        (user) => user.gender.toLowerCase() === gender.toLowerCase()
      );
    }
    setFilteredUsers(filtered);
    resetPage();
  };

  const handleFilter = (nat: string | null, gender: string | null) => {
    filterByNatAndGender(nat, gender);
  };

  return {
    handleFilter,
    filteredUsers,
    handleSearch,
  };
};
