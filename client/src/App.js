import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />

        {/* Routes for the app */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
      
      </Container>
    </Router>
  );
};

export default App;
