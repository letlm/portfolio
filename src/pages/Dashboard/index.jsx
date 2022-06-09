import React from "react";
import Aside from "../../components/Aside";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Home from "../../components/Home";
import Nav from "../../components/Nav";
import MediaQuery from "react-responsive";
import { Container } from "./styles";

function Dashboard() {
  return (
    <Container>
      <Header>
        <MediaQuery maxWidth={699}>
          <Aside />
        </MediaQuery>
        <MediaQuery minWidth={700}>
          <Nav />
        </MediaQuery>
      </Header>
      <Home />
      <Footer />
    </Container>
  );
}

export default Dashboard;
