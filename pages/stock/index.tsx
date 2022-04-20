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
import { Typography } from "@mui/material";
import Moment from "react-moment";
import { default as NumberFormat } from "react-number-format";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Button from "@material-ui/core/Button";
import MaterialTable from "material-table";
import Router from "next/router";
import axios from "axios";

type Props = {};

export default function Stock({}: Props) {
  const [products, setproducts] = useState([]);
  const load_data = async () => {
    const res = await axios.get("http://localhost:8085/api/v2/stock/product");
    setproducts(res.data);
    // console.log(products);
  };

  useEffect(() => {
    load_data();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "action",
      headerName: "action",
      width: 130,
      renderCell: (item) => (
        <Box>
          <IconButton
            aria-label="edit"
            onClick={() => {
              Router.push({
                pathname: "/stock/edit",
                query: { id: item.id },
              });
            }}
          >
            <EditIcon sx={{ color: "yellow" }} />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => {
              console.log("delete");
            }}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </Box>
      ),
    },
    {
      field: "id",
      headerName: "id",
      width: 130,
      renderCell: (item) => (
        <Typography variant="body1" color="primary">
          {item.value}
        </Typography>
      ),
    },
    { field: "name", headerName: "name", width: 130 },
    {
      field: "image",
      headerName: "image",
      // type: 'number',
      width: 90,
      renderCell: (item) => (
        <img
          src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4L9Li4ZTkHOsfRLZqfUAiLSmsoQ834Z9V4NmK4R9tYhJvPVFs0A.jpg"
          style={{ width: 70, height: 70, borderRadius: "5%" }}
        />
      ),
    },
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
    { field: "stock", headerName: "stock", width: 130 },

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
            onClick={() => Router.push("/stock/create")}
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
          rows={products != [] ? products : []}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row.id}
          rowsPerPageOptions={[5]}
          components={{
            Toolbar: CustomToolbar,
          }}
          // checkboxSelection
        />
      </div>
      {/* <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'Adı', field: 'name' },
            { title: 'Soyadı', field: 'surname' },
            { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
            { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
          ]}
          data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
          title="Demo Title"
        />
      </div> */}
    </Layout>
  );
}
