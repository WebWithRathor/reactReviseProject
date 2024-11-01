import React from "react";
import Approutes from "./routes/Approutes";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/partials/Nav";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Approutes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
