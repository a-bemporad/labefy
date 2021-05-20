import React from "react";
import "../App.css"
import styled from "styled-components";
import axios from "axios";

export default class AddSongs extends React.Component {
    render () {
        return (
            <div className="AddSongs">
                <h3>Add a new song</h3>
                <div>
                    <label>Song name: </label>
                    <input />
                    <label>Artist name: </label>
                    <input />
                    <label>URL: </label>
                    <input placeholder="Insert an URL with the corresponding audio"/>
                </div>
                <button>Add song</button>
            </div>
        )
    }
}
