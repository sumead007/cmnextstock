import { Box } from "@mui/material";
import { createStyles, makeStyles } from "@mui/material/styles";
import React, { useState } from "react";

import styles from "../styles/login.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Router from "next/router";

type Props = {};

type TAccount = {
  username: string;
  password: string;
};
export default function Register({}: Props) {
  const [account, setaccount] = useState<TAccount>({
    username: "",
    password: "",
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
            <Box component="h1">Register</Box>

            <form noValidate>
              <TextField
                id="username"
                label="username"
                type="text"
                autoComplete="username"
                margin="normal"
                fullWidth
                value={account.username}
                onChange={(e) =>
                  setaccount({ ...account, username: e.target.value })
                }
              />

              <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="password"
                margin="normal"
                fullWidth
                value={account.password}
                onChange={(e) =>
                  setaccount({ ...account, password: e.target.value })
                }
              />
              <Button
                fullWidth
                variant="contained"
                onClick={() => {
                  alert(JSON.stringify(account));

                }}
              >
                register
              </Button>
              <Button
                fullWidth
                onClick={() => {
                  // Router.back();
                  Router.push("/login");
                }}
              >
                cencel
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
