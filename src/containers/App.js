import React from "react";
import { styled } from "@material-ui/styles";
import Layout from "./Layout";

export const AppContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100vh"
});

function App() {
  return (
    <AppContainer>
      <Layout />
    </AppContainer>
  );
}

export default App;
