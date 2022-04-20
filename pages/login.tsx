import { Box } from "@mui/material";
import { createStyles, makeStyles } from "@mui/material/styles";
import React from "react";

import styles from "../styles/login.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Router from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
type Props = {};

const onClickLogin = () => {
  Router.push("/stock");
};

const validationSchema = yup.object({
  username: yup
    .string("Enter your username")
    .min(2, "username should be of minimum 2 characters length")
    .required("username is required"),
  password: yup
    .string("Enter your password")
    .min(2, "กรุณากรอก1ตัวขึ้น")
    .required("password is required"),
});

export default function Login({}: Props) {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4MDgvq5XaLTlI18RVr0bv8sSRPmSp7DkZCXMWirpW7Dcb3Sjkwj.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Box component="h1">Login</Box>

            <form onSubmit={formik.handleSubmit}>
              <TextField
                id="username"
                label="username"
                type="text"
                autoComplete="username"
                margin="normal"
                fullWidth
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />

              <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="password"
                margin="normal"
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button fullWidth variant="contained" type="submit">
                Login
              </Button>
              <Button
                fullWidth
                onClick={() => {
                  Router.push("/register");
                }}
              >
                register
              </Button>
            </form>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <style jsx global>
          {`
            body {
              min-height: 100vh;
              position: relative;
              margin: 0px;
              background-size: cover;
              background-image: url("/static/img/liverpool-03.jpg");
              text-align: center;
            }
          `}
        </style>
      </Box>
    </React.Fragment>
  );
}
