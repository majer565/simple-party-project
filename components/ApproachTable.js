import React from "react";
import { useState, useEffect, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const ApproachTable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/getApproachData");
      const data = await response.json();
      const mapData = data.map((data) => {
        if (data.approach === "car") {
          return { ...data, approach: "Jadę autem" };
        } else if (data.approach === "together") {
          return { ...data, approach: "Chcę się z kimś zabrać" };
        } else {
          return { ...data, approach: "Jeszcze nie wiem" };
        }
      });
      setData(mapData);
    };
    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Imię",
        size: 100,
      },
      {
        accessorKey: "approach",
        header: "Dojazd",
        size: 100,
      },
    ],
    []
  );

  console.log(data);
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

export default ApproachTable;
