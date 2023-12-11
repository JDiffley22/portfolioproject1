import React, { useContext } from "react";
import Header from "@/components/Header";
// import Paragraph from "@/components/Paragraph";
import {
  Container,
  // Alert,
  // Snackbar,
  // IconButton,
  // CloseIcon,
} from "@/components/mui";
// import { UIContext } from "./contexts/UI.context";

function Layout({children}) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container maxWidth="md">
        {children}
        </Container>
      </main>
      
    </>
  );
}

export default Layout;

//   const {
//     isOpen: open,
//     severity,
//     onClose: handleClose,
//     message,
//     hideDuration,
//   } = useContext(UIContext);

{/* <Snackbar
        open={open}
        autoHideDuration={hideDuration}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          <Paragraph sx={{ margin: "0px" }}>{message}</Paragraph>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Alert>
      </Snackbar> */}