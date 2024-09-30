import { Row, Col, Card, Button } from "react-bootstrap";
import SearchableDropdown from "../SearchableDropdown/SearchableDropdown";
import { genderOptions, nationalityOptions } from "../../constants/filters";

interface FiltersProps {
  selectedNat: { value: string; label: string } | null;
  setSelectedNat: (option: { value: string; label: string } | null) => void;
  selectedGender: { value: string; label: string } | null;
  setSelectedGender: (option: { value: string; label: string } | null) => void;
  onFilter: () => void;
}

const Filters = ({
  selectedNat,
  setSelectedNat,
  selectedGender,
  setSelectedGender,
  onFilter,
}: FiltersProps) => {
  return (
    <Row>
      <Col>
        <Card className="shadow-sm p-0 border-0 m-0">
          <Card.Body>
            <Row className="g-2">
              <Col md={4}>
                <SearchableDropdown
                  options={nationalityOptions}
                  placeholder="Nacionalidad"
                  selectedValue={selectedNat}
                  onSelect={setSelectedNat}
                />
              </Col>

              <Col md={4}>
                <SearchableDropdown
                  options={genderOptions}
                  placeholder="Género"
                  selectedValue={selectedGender}
                  onSelect={setSelectedGender}
                />
              </Col>

              <Col md={2}>
                <Button
                  variant="primary"
                  className="header__search-button px-4 d-flex align-items-center justify-content-center"
                  onClick={onFilter}
                >
                  <i className="bi bi-search me-2"></i>Buscar
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Filters;
