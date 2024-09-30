import { Card, Col, Container, Row } from "react-bootstrap";
import InputSearch from "../InputSearch/InputSearch";
import Header from "../Header/Header";
import ActionButtons from "../ActionButtons/ActionButtons";
import PaginationControls from "../PaginationControls/PaginationControls";
import UserTable from "../UsersTable/UsersTable";
import UserEditModal from "../UserEditModal/UserEditModal";
import { useDashboard } from "../../hooks/useDashboard";

import "./UserDashboard.scss";


const UserDashboard = () => {
  const {
    paginatedUsers,
    isLoading,
    filteredUsers,
    error,
    handleFilter,
    handleSearch,
    selectedUser,
    handleEdit,
    setSelectedUser,
    handleDeleteUser,
    handleSaveUser,
    showEditModal,
    setShowEditModal,
    goToNextPage,
    goToPreviousPage,
    changePage,
    currentPage,
    totalPages,
  } = useDashboard();

  return (
    <Container className="user-dashboard mt-4">
      <Header onFilter={handleFilter} />
      <Card>
        <Card.Header className="user-dashboard__card-header">
          <ActionButtons selectedUser={selectedUser} onEdit={handleEdit} onDelete={handleDeleteUser}/>
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
