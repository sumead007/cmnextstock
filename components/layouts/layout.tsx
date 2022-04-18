import React from "react";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <React.Fragment>
      <Header></Header>
      <Menu></Menu>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container style={{ display: "flex", paddingLeft: 240 }}>
          {children}
        </Container>
      </Box>
      <Footer
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#111",
          height: "auto",
          width: "100vw",
          paddingTop: "40px",
          color: "#fff",
        }}
      ></Footer>
      <style jsx global>
        {`
          body {
            margin: 0px;
          }
        `}
      </style>
    </React.Fragment>
  );
}
