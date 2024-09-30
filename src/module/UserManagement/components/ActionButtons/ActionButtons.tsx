import { Row, Col, Button } from "react-bootstrap";
import { User } from "../../types/User"; // Asegúrate de tener el tipo User

import "./ActionButtons.scss";

interface ActionButtonsProps {
  selectedUser: User | null;
  onEdit: (user: User) => void;
}

const ActionButtons = ({ selectedUser, onEdit }: ActionButtonsProps) => (
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
          disabled={!selectedUser}
        >
          <i className="bi bi-trash me-2"></i>Eliminar
        </Button>
      </div>
    </Col>
  </Row>
);
export default ActionButtons;
