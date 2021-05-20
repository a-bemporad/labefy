import React from "react";
import "../App.css"
import styled from "styled-components";
import axios from "axios";

export default class PlaylistDetails extends React.Component {
    render () {
        return (
            <div className="PlaylistDetails">
                <h3>Playlist-name</h3>
                    <ul>
                        <li>Nome da música 1 <audio controls src="http://spoti4.future4.com.br/1.mp3" /></li>
                        <li>Nome da música 2 <audio controls src="http://spoti4.future4.com.br/2.mp3" /></li>
                        <li>Nome da música 3 <audio controls src="http://spoti4.future4.com.br/3.mp3" /></li>
                    </ul>
            </div>
        )
    }
}
