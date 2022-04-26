import React from "react";
import Layout from "../../components/layouts/layout";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import { StockCreateReducer } from "../../types/stockCreate.reducer.types";

type Props = {};

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .min(4, "name should be of minimum 8 characters length")
    .required("name is required"),
  price: yup
    .string("Enter your integer")
    .min(1, "กรุณากรอก1ตัวขึ้น")
    .required("price is required"),
  stock: yup
    .string("Enter your integer")
    .min(1, "กรุณากรอก1ตัวขึ้น")
    .required("stock is required"),
});

const showPreviewImage = (values) => {
  if (values.file_obj) {
    return <img src={values.file_obj} style={{ height: 100, marginTop: 16 }} />;
  }
};

export default function StockCreate({}: Props) {
  const stockCreateReducer = useSelector((state) => state.stockCreateReducer);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "foobar",
      price: 2,
      stock: 1,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));

      let formData = new FormData();
      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append("stock", values.stock);
      formData.append("image", values.file);
      dispatch(actions.createStock(formData));
    },
  });

  return (
    <Layout>
      <Card sx={{ flexGrow: 1 }}>
        <Box component={"h1"}>Create Product</Box>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="name"
              margin="normal"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              id="price"
              margin="normal"
              name="price"
              label="price"
              type="text"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
            />
            <TextField
              fullWidth
              id="stock"
              margin="normal"
              name="stock"
              label="stock"
              type="text"
              value={formik.values.stock}
              onChange={formik.handleChange}
              error={formik.touched.stock && Boolean(formik.errors.stock)}
              helperText={formik.touched.stock && formik.errors.stock}
            />
            <div>{showPreviewImage(formik.values)}</div>
            <span>Add Picture</span>
            <input
              type="file"
              onChange={(e) => {
                e.preventDefault();
                formik.setFieldValue("file", e.target.files[0]);
                formik.setFieldValue(
                  "file_obj",
                  URL.createObjectURL(e.target.files[0])
                );
              }}
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onSubmit={() => {}}
              disabled={stockCreateReducer.isFetching}
            >
              Submit
              {stockCreateReducer.isFetching && (
                <CircularProgress
                  color="secondary"
                  size={20}
                  style={{ marginLeft: 8 }}
                />
              )}
            </Button>
            <Button onClick={() => Router.back()}>Cancel</Button>
          </form>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
    </Layout>
  );
}
