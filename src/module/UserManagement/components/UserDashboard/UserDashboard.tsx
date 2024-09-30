import { Card, Col, Container, Row } from "react-bootstrap";
import InputSearch from "../InputSearch/InputSearch";
import Header from "../Header/Header";
import ActionButtons from "../ActionButtons/ActionButtons";
import PaginationControls from "../PaginationControls/PaginationControls";
import UserTable from "../UsersTable/UsersTable";
import { useUsers } from "../../services/useUser";
import { useFilteredUsers } from "../../hooks/useFilterdUsers";
import { usePagination } from "../../hooks/usePagination";
import UserEditModal from "../UserEditModal/UserEditModal";
import { useEditUser } from "../../hooks/useEditUser";
import { usePaginatedData } from "../../hooks/usePaginatedData";

import "./UserDashboard.scss";

const UserDashboard = () => {
  const { data: users, isLoading, error } = useUsers();
  const {
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    changePage,
    setCurrentPage,
  } = usePagination(users?.length || 0);
  const { handleFilter, filteredUsers, handleSearch } = useFilteredUsers(
    users,
    () => setCurrentPage(1)
  );
  const {
    selectedUser,
    showEditModal,
    handleEdit,
    handleSaveUser,
    setSelectedUser,
    setShowEditModal,
  } = useEditUser();

  const paginatedUsers = usePaginatedData(filteredUsers, currentPage, 10);

  return (
    <Container className="user-dashboard mt-4">
      <Header onFilter={handleFilter} />
      <Card>
        <Card.Header className="user-dashboard__card-header">
          <ActionButtons selectedUser={selectedUser} onEdit={handleEdit} />
        </Card.Header>
        <Card.Body className="user-dashboard__card-body">
          <Row className="user-dashboard__input-row mb-3">
            <Col>
              <InputSearch onSearch={handleSearch} />
            </Col>
          </Row>
          <UserTable
            data={paginatedUsers}
            isLoading={isLoading}
            error={error}
            onSelectUser={setSelectedUser}
          />
          <PaginationControls
            totalRecords={filteredUsers?.length || 0}
            currentPage={currentPage}
            totalPages={totalPages}
            goToNextPage={goToNextPage}
            goToPreviousPage={goToPreviousPage}
            changePage={changePage}
          />
        </Card.Body>
      </Card>

      <UserEditModal
        show={showEditModal}
        user={selectedUser}
        onClose={() => setShowEditModal(false)}
        onSave={handleSaveUser}
      />
    </Container>
  );
};

export default UserDashboard;
