import Select from "react-select";

interface OptionType {
  value: string;
  label: string;
}

interface SearchableDropdownProps {
  options: OptionType[];
  placeholder: string;
  selectedValue: OptionType | null;
  onSelect: (selectedOption: OptionType | null) => void;
}

const SearchableDropdown = ({
  options,
  placeholder,
  selectedValue,
  onSelect,
}: SearchableDropdownProps) => {
  return (
    <Select
      value={selectedValue}
      onChange={onSelect}
      options={options}
      placeholder={placeholder}
      isClearable
      styles={{
        control: (provided) => ({
          ...provided,
          backgroundColor: "#f8f8f8",
          borderColor: "transparent",
          boxShadow: "none",
          "&:hover": {
            borderColor: "transparent",
          },
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          color: "#007bff",
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? "#007bff" : "#fff",
          color: state.isSelected ? "#fff" : "#333",
          "&:hover": {
            backgroundColor: "#007bff",
            color: "#fff",
          },
        }),
      }}
    />
  );
};

export default SearchableDropdown;
