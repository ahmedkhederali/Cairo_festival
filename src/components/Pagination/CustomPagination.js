import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import {  ThemeProvider } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles'
import { Palette } from "@material-ui/icons";

//ازاي اغير لون ترقيم الصفحات
const theme = createTheme({
  palette: {
    type: "dark",
  },
});
function CustomPagination({ setPage ,numOfPages = 10}) {
  const handelPageChange = (page) => {
    setPage(page);
    window.scrollTo(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Pagination
          hideNextButton
          color="secondary"
          hidePrevButton
          count={numOfPages}
          onChange={(e) => (
            handelPageChange(e.target.textContent),
            // pages number  return buttom and i take number of buttom
            console.log(e.target.textContent)
          )}
        />
      </ThemeProvider>
    </div>
  );
}

export default CustomPagination;
