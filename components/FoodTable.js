import React, { useMemo, useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";

const FoodTable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/getFoodData");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Imię",
        size: 50,
      },
      {
        accessorKey: "text",
        header: "Zaopatrzenie",
        size: 200,
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

export default FoodTable;
