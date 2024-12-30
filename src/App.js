// import React from 'react';
import React, { Component } from "react";
import Router from "./markup/router";
import "./App.css";

import "./plugins/fontawesome/css/font-awesome.min.css";
import "./plugins/line-awesome/css/line-awesome.min.css";
import "./plugins/flaticon/flaticon.css";
import "./plugins/flaticon/beer/flaticon.css";
// import './css/plugins.css';
// import './css/style.css';
// import './css/templete.min.css';

import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from "react-floating-button-menu";
import MdAdd from "@material-ui/icons/Add";
import MdClose from "@material-ui/icons/Clear";
import MdWhatsApp from "@material-ui/icons/WhatsApp";

class App extends Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <div className="App">
        <Router />
        <FloatingMenu
          // style={{ backgroundColor: "green" }}
          slideSpeed={500}
          direction="up"
          style={{
            color: "black",
            bottom: "70px",
            right: "12px",
            position: "fixed",
            zIndex: "100",
          }}
          spacing={8}
          isOpen={this.state.isOpen}
          class="chat"
        >
          <MainButton
            style={{ backgroundColor: "#ff5e14" }}
            iconResting={
              <MdAdd
                style={{ fontSize: 20, color: "white" }}
                nativeColor="white"
              />
            }
            iconActive={
              <MdClose
                style={{ fontSize: 20, color: "white" }}
                nativeColor="white"
              />
            }
            backgroundColor="black"
            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            size={56}
          />
          <ChildButton
            style={{ backgroundColor: "green" }}
            icon={
              <MdWhatsApp
                style={{ fontSize: 20, color: "green" }}
                nativeColor="black"
              />
            }
            size={50}
            onClick={() => window.open("https://wa.me/+919913344447", "_blank")}
          />
          {/* <ChildButton
            icon={<MdFavorite style={{ fontSize: 20 }} nativeColor="black" />}
            backgroundColor="white"
            size={40}
          />
          <ChildButton
            icon={<MdFavorite style={{ fontSize: 20 }} nativeColor="black" />}
            backgroundColor="white"
            size={40}
          /> */}
        </FloatingMenu>
      </div>
    );
  }
}

export default App;
