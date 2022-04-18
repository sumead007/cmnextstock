import React from "react";
import Header from "../components/layouts/header";
import Layout from "../components/layouts/layout";
import Menu from "../components/layouts/menu";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { products } from "./api/dummy";
import { Typography } from "@mui/material";
// import { Moment } from "react-moment";
import { default as NumberFormat } from 'react-number-format';
type Props = {};

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Stock({}: Props) {
  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "title",
      width: 130,
      renderCell: (item) => <Typography variant="body1" color="primary">{item.id}</Typography>,
    },
    { field: "type", headerName: "type", width: 130 },
    { field: "description", headerName: "description", width: 130,minWidth:400 },
    {
      field: "filename",
      headerName: "filename",
      // type: 'number',
      width: 90,
    },
    { field: "height", headerName: "height", width: 130 },
    { field: "width", headerName: "width", width: 130 },
    {
      field: "price", headerName: "price", width: 200,
      renderCell: (item) => <NumberFormat thousandSeparator={true} thousandsGroupStyle="wan" prefix={'$'} value={item.price} />,
  
    },
    { field: "rating", headerName: "rating", width: 130 },

    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];
  return (
    <Layout>
      {/* {JSON.stringify(products)} */}

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row.title}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </Layout>
  );
}
