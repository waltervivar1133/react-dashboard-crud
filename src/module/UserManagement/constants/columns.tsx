import { TableColumn } from "react-data-table-component";
import { User } from "../types/User";

export const columns: TableColumn<User>[] = [
  {
    name: "",
    cell: (row: User) => (
      <img
        src={row.picture.thumbnail}
        alt={`${row.name.first} ${row.name.last}`}
        style={{ borderRadius: "100%" }}
        width="40"
        height="40"
      />
    ),
    sortable: false,
    width: "5rem",
  },
  {
    name: "Nombre",
    selector: (row: User) => `${row.name.first} ${row.name.last} `,
    sortable: true,
  },
  {
    name: "Género",
    selector: (row: User) => row.gender,
    sortable: true,
  },
  {
    name: "Dirección",
    selector: (row: User) =>
      ` ${row.location.street.name} ${row.location.street.number}`,
    sortable: true,
  },
  {
    name: "Teléfono",
    selector: (row: User) => row.phone,
    sortable: true,
  },
  {
    name: "Correo Electrónico",
    selector: (row: User) => row.email,
    sortable: true,
  },
  {
    name: "País",
    selector: (row: User) =>
      row.location.country ? row.location.country : "N/A",
    sortable: true,
  },
];
