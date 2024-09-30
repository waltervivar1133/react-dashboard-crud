import { Row, Col, Button } from "react-bootstrap";
import { User } from "../../types/User";

import "./ActionButtons.scss";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
interface ActionButtonsProps {
  selectedUser: User | null;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

const ActionButtons = ({
  selectedUser,
  onEdit,
  onDelete,
}: ActionButtonsProps) => {
  const deleteModal = DeleteConfirmationModal({
    user: selectedUser,
    onConfirm: () => selectedUser && onDelete(selectedUser),
  });

  const handleDelete = () => {
    deleteModal.showDeleteConfirmation();
  };
  return (
    <Row>
      <Col>
        <div className="d-flex action-buttons--gap">
          <Button
            variant="outline-primary"
            className="action-buttons__btn m-0"
            onClick={() => selectedUser && onEdit(selectedUser)}
            disabled={!selectedUser}
          >
            <i className="bi bi-pencil me-2"></i>Editar
          </Button>
          <Button
            variant="outline-danger"
            className="action-buttons__btn m-0"
            onClick={handleDelete}
            disabled={!selectedUser}
          >
            <i className="bi bi-trash me-2"></i>Eliminar
          </Button>
        </div>
      </Col>
    </Row>
  );
};
export default ActionButtons;
