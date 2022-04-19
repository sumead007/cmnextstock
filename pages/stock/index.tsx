import React, { useState, useEffect } from "react";
import Header from "../../components/layouts/header";
import Layout from "../../components/layouts/layout";
import Menu from "../../components/layouts/menu";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { products } from "../api/dummy";
import { Typography } from "@mui/material";
import Moment from "react-moment";
import { default as NumberFormat } from "react-number-format";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Button from "@material-ui/core/Button";

type Props = {};

export default function Stock({}: Props) {
  const columns: GridColDef[] = [
    {
      field: "action",
      headerName: "action",
      width: 130,
      renderCell: (item) => (
        <Box>
          <IconButton aria-label="edit">
            <EditIcon sx={{ color: "yellow" }} onClick={() => {}} />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon sx={{ color: "red" }} onClick={() => {}} />
          </IconButton>
        </Box>
      ),
    },
    {
      field: "title",
      headerName: "title",
      width: 130,
      renderCell: (item) => (
        <Typography variant="body1" color="primary">
          {item.value}
        </Typography>
      ),
    },
    { field: "type", headerName: "type", width: 130 },
    {
      field: "description",
      headerName: "description",
      width: 130,
      minWidth: 400,
    },
    {
      field: "filename",
      headerName: "filename",
      // type: 'number',
      width: 90,
      renderCell: (item) => (
        <img
          src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4L9Li4ZTkHOsfRLZqfUAiLSmsoQ834Z9V4NmK4R9tYhJvPVFs0A.jpg"
          style={{ width: 70, height: 70, borderRadius: "5%" }}
        />
      ),
    },
    { field: "height", headerName: "height", width: 130 },
    { field: "width", headerName: "width", width: 130 },

    {
      field: "price",
      headerName: "price",
      width: 200,
      renderCell: (params) => (
        <NumberFormat
          value={params.value}
          displayType={"text"}
          thousandSeparator={true}
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={"$"}
        />
      ),
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

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        {/* <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport /> */}
        <div style={{ padding: "0px 10px" }}>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            disableElevation
          >
            Created
          </Button>
        </div>
      </GridToolbarContainer>
    );
  }

  return (
    <Layout>
      {/* {JSON.stringify(products)} */}

      {/* {JSON.stringify(first)} */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          sx={{ backgroundColor: "white" }}
          rows={products}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row.title}
          rowsPerPageOptions={[5]}
          components={{
            Toolbar: CustomToolbar,
          }}
          // checkboxSelection
        />
      </div>
    </Layout>
  );
}
