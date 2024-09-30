import { useState } from "react";
import { User } from "../types/User";

export const useEditUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleSaveUser = (updatedUser: User) => {
    console.log("User updated:", updatedUser);
    setShowEditModal(false);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
  };

  return {
    setSelectedUser,
    selectedUser,
    showEditModal,
    handleEdit,
    handleSaveUser,
    handleCloseModal,
    setShowEditModal
  };
};
