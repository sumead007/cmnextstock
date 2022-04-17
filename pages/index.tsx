import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import Head from "next/head";

type Props = {};

export default function index({}: Props) {
  return <div></div>;
}

//server side
index.getInitialProps = async ({ res, err }) => {
  res.writeHead(301, { Location: "/login" });
  res.end();
  return {};
};
