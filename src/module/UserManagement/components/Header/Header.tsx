import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Filters from "../Filters/Filters";
import { OptionType } from "../../types/Option";

import "./Header.scss";

interface HeaderProps {
  onFilter: (nat: string | null, gender: string | null) => void;
}

const Header = ({ onFilter }: HeaderProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedNat, setSelectedNat] = useState<OptionType | null>(null);
  const [selectedGender, setSelectedGender] = useState<OptionType | null>(null);

  const toggleFilters = () => setShowFilters(!showFilters);

  const handleFilter = () => {
    onFilter(selectedNat?.value || null, selectedGender?.value || null);
  };

  const handleClearFilters = () => {
    setSelectedNat(null);
    setSelectedGender(null);
    onFilter(null, null);
  };

  return (
    <section className="mb-3">
      <Row>
        <Col>
          <h3 className="header__title">Listado de usuarios</h3>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button
            variant="outline-primary"
            className="header__filter-button m-0 px-4 d-flex justify-content-center align-items-center"
            onClick={toggleFilters}
          >
            <i className="bi bi-sliders me-2"></i>Filtros
          </Button>
        </Col>
      </Row>

      {showFilters && (
        <Filters
          selectedNat={selectedNat}
          setSelectedNat={setSelectedNat}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          onFilter={handleFilter}
          onClearFilters={handleClearFilters}
        />
      )}
    </section>
  );
};

export default Header;
