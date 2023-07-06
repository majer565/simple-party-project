import React, { useMemo, useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";

const AccomTable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/getAccomData");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 100,
      },
      {
        accessorKey: "place",
        header: "Miejsce",
        size: 100,
      },
      {
        accessorKey: "count",
        header: "Dla ilu osób",
        size: 100,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 100,
      },
      {
        accessorKey: "name",
        header: "Rezerwacja",
        size: 100,
      },
    ],
    []
  );
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      muiTableBodyRowProps={{ hover: false }}
      muiTableProps={{ sx: { border: "2px solid black" } }}
      muiTableHeadCellProps={{
        sx: {
          color: "black",
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          color: "black",
        },
      }}
    />
  );
};

export default AccomTable;
