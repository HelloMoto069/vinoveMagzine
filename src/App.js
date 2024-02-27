import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Provider } from "react-redux";
import Store from "./redux/Store";

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <Main />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
