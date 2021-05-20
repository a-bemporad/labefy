import React from "react";
import styled from "styled-components";
import "./App.css";
import axios from "axios";
import CreatePlaylist from "./components/CreatePlaylist";
import AllPlaylists from "./components/AllPlaylists";
import AddSongs from "./components/AddSongs";
import PlaylistDetails from "./components/PlaylistDetails";

const MainContainer = styled.div `
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 2fr 5fr 5fr 5fr;
`;
const Header = styled.h1 `
  grid-column: 1 / 3;
`;

export default class App extends React.Component {
  
  render() {
    return (
      <MainContainer>
        <Header>Labefy</Header>
        {/* <CreatePlaylist /> */}
        <AllPlaylists />
        <AddSongs />
        <PlaylistDetails />
      </MainContainer>
    )
  }
}