import { useEffect, useState } from "react";
import { User } from "../types/User";

export const usePaginatedData = (data: User[], currentPage: number, pageSize: number) => {
  const [paginatedData, setPaginatedData] = useState<User[]>([]);

  useEffect(() => {
    if (data) {
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;
      setPaginatedData(data.slice(start, end));
    }
  }, [data, currentPage, pageSize]);

  return paginatedData;
};
