import { useState } from "react";
import { useUsers } from "../services/useUser";
import { usePagination } from "./usePagination";
import { useFilteredUsers } from "./useFilterdUsers";
import { usePaginatedData } from "./usePaginatedData";
import { useEditUser } from "./useEditUser";
import { User } from "../types/User";

export const useDashboard = () => {
  const [natFilter, setNatFilter] = useState<string | null>(null);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);


  const { data: users, isLoading, error } = useUsers(natFilter, genderFilter);

  const {
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    changePage,
    setCurrentPage,
  } = usePagination(users?.length || 0);

  const { filteredUsers, handleSearch } = useFilteredUsers(users, () =>
    setCurrentPage(1)
  );

  const paginatedUsers = usePaginatedData(filteredUsers, currentPage, 10);

  const {
    selectedUser,
    showEditModal,
    handleEdit,
    handleSaveUser,
    setSelectedUser,
    setShowEditModal,
  } = useEditUser();


  const handleDeleteUser = (user: User) => {
    console.log(`Usuario eliminado: ${user.name.first} ${user.name.last}`);
    setSelectedUser(null);
  };

  const handleFilter = (nat: string | null, gender: string | null) => {
    setNatFilter(nat);
    setGenderFilter(gender);
    setCurrentPage(1); 
  };

  return {
    paginatedUsers,
    isLoading,
    error,
    handleDeleteUser,
    handleFilter,
    filteredUsers,
    handleSearch,
    selectedUser,
    setSelectedUser,
    handleEdit,
    handleSaveUser,
    showEditModal,
    setShowEditModal,
    goToNextPage,
    goToPreviousPage,
    changePage,
    currentPage,
    totalPages,
  };
};
