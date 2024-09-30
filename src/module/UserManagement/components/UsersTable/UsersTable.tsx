import DataTable from "react-data-table-component";
import { columns } from "../../constants/columns";
import Loader from "@/module/shared/components/Loader/Loader";
import { User } from "../../types/User";
import NoRecords from "@/module/shared/components/NoRecords/NoRecords";

interface UserTableProps {
  data: User[] | undefined;
  isLoading: boolean;
  error: Error | null;
  onSelectUser: (user: User) => void;
}

const UserTable = ({
  data,
  isLoading,
  error,
  onSelectUser,
}: UserTableProps) => {

  const handleSelectedRowsChange = (selected: {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: User[];
  }) => {
    if (selected.selectedRows.length > 0) {
      onSelectUser(selected.selectedRows[0]);
    }
  };

  if (error) {
    return <p>Error al cargar los usuarios</p>;
  }

  return (
    <DataTable
      columns={columns}
      data={data || []}
      selectableRows
      selectableRowsSingle
      selectableRowsVisibleOnly
      progressPending={isLoading}
      progressComponent={<Loader />}
      noDataComponent={<NoRecords />}
      onSelectedRowsChange={handleSelectedRowsChange}
      keyField="login.uuid"
    />
  );
};

export default UserTable;
