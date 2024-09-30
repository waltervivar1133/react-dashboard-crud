import DataTable from "react-data-table-component";
import { columns } from "../../constants/columns";
import Loader from "@/module/shared/components/Loader/Loader";
import { User } from "../../types/User";
import NoRecords from "@/module/shared/components/NoRecords/NoRecords";
import ErrorService from "@/module/shared/components/ErrorService/ErrorService";

interface UserTableProps {
  data: User[] | undefined;
  isLoading: boolean;
  error: Error | null;
  onSelectUser: (user: User | null) => void;
}

const UserTable = ({
  data,
  isLoading,
  error,
  onSelectUser,
}: UserTableProps) => {
  const handleSelectedRowsChange = (selected: { selectedRows: User[] }) => {
    onSelectUser(selected.selectedRows[0] || null);
  };

  if (error) {
    return <ErrorService />;
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
