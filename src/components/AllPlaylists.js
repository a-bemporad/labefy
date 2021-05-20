import React from "react";
import "../App.css"
import styled from "styled-components";
import axios from "axios";
import { baseUrl, auth } from "./constants";
import CreatePlaylist from "./CreatePlaylist"

export default class AllPlaylists extends React.Component {
    state = {
        addPlaylistForm: false,
        savedplaylists: [],
    }

    componentDidMount = () => {
        this.renderSavedPlaylists()
    }

    renderSavedPlaylists = () => {
        axios.get(baseUrl, auth)
        .then((response) => {
            this.setState({savedplaylists : response.data.result.list})
        })
        .catch((error) => {
            alert(`It wasn't possible to show the saved playlists. ${error.message}`)
        })
    }

    deletePlaylist = (savedplaylist) => {
        axios.delete(`${baseUrl}/${savedplaylist.id}`, auth)
        .then(() => {
            this.renderSavedPlaylists()
            
        })
        .catch((error) => {
            alert(`It wasn't possible to delete that playlist. ${error.message}`)
            
        })
    }

    showAddPlaylistForm = () => {
        this.setState({addPlaylistForm: !this.state.addPlaylistForm})
        console.log(this.state.addPlaylistForm)
    }

    render () {
        return (
            <div className="AllPlaylists">
                {this.state.addPlaylistForm && <CreatePlaylist getPlaylists={this.renderSavedPlaylists}/>}
                <button onClick={this.showAddPlaylistForm}>Add a playlist</button>
                <h2>Playlists</h2>
                <ul>
                    {this.state.savedplaylists.map((savedplaylist) => {
                        return (
                            <div className="savedPlaylists" key={savedplaylist.id}>
                                <li>{savedplaylist.name}</li>
                                <button onClick={this.deletePlaylist}>x</button>
                                <button>See tracks</button>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
