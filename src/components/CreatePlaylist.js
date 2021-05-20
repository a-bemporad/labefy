import React from "react";
import "../App.css"
import styled from "styled-components";
import axios from "axios";
import { baseUrl, auth } from "./constants";
import AllPlaylists from "./AllPlaylists"

export default class CreatePlaylist extends React.Component {
    state = {
        playlistname: '',
    }
    
      onChangePlaylistName = (event) => {
        this.setState({playlistname: event.target.value})
      }
     
      createPlaylist = () => {
        const body = {
          name: this.state.playlistname,
          showingPlaylists: false,
        }
    
        axios
        .post(baseUrl, body, auth)
        .then((response) => {
          alert("The new playlist was created!")
          this.setState({playlistname: ''})
          this.props.getPlaylists()
        })
        .catch((error) => {
            if (error.message === "Request failed with status code 400"){
                alert("Looks like you already have a playlist with that name, try another name!")
            }else{
            alert(`It wasn't possible to create this new playlist. ${error.message}`)
            }
        })
      }
      
      render() {
        return (
            <div className="CreatePlaylist">
                <h3>Create a new playlist</h3>
                <input placeholder='Playlist name' value={this.state.playlistname} onChange={this.onChangePlaylistName} />
                <button id="savePlaylist" onClick={this.createPlaylist}>Save</button>
            </div>
        )
      }
}