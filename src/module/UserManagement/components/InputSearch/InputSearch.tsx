import { Form, InputGroup } from "react-bootstrap";
import { useState } from "react";

import "./InputSearch.scss";

interface InputSearchProps {
  onSearch: (value: string) => void;
}

const InputSearch = ({ onSearch }: InputSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <InputGroup className="input-search mt-4 mb-1 shadow-sm rounded">
      <Form.Control
        placeholder="Buscar"
        aria-label="Buscar"
        className="input-search__input m-0"
        value={searchTerm}
        onChange={handleSearch}
      />
      <InputGroup.Text className="input-search__button">
        <i className="bi bi-search color-blue"></i>
      </InputGroup.Text>
    </InputGroup>
  );
};

export default InputSearch;
