import { Row, Col, Button } from "react-bootstrap";

import "./PaginationControls.scss";

interface PaginationControlsProps {
  totalRecords: number;
  currentPage: number;
  totalPages: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  changePage: (page: number) => void;
}

const PaginationControls = ({
  totalRecords,
  currentPage,
  totalPages,
  goToNextPage,
  goToPreviousPage,
}: PaginationControlsProps) => (
  <Row className="d-flex justify-content-between mt-3">
    <Col>
      <p className="totalRegister">#Registros: {totalRecords}</p>
    </Col>
    <Col className="d-flex justify-content-end">
      <Button
        variant="outline-secondary"
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
      >
        Anterior
      </Button>
      <Button variant="primary" className="mx-2">
        Página {currentPage} de {totalPages}
      </Button>
      <Button
        variant="outline-secondary"
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </Button>
    </Col>
  </Row>
);

export default PaginationControls;
