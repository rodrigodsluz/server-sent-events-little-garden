import { ToastContainer } from "material-react-toastify";
import React from "react";
import { Router } from "react-router";
import Routes from "./routes/Routes";
import history from "./services/history";
import GlobalStyle from "./styles/global-styles";
import './App.css';

function App() {
  return (
    <>
    <Router history={history}>
      <Routes/>
      <GlobalStyle/>
      <ToastContainer autoClose={3000} 
      position="top-right" 
      hideProgressBar={false}
      pauseOnFocusLoss={false}
      />
    </Router>
    </>
  );
}

export default App;
