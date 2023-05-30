import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import {useDataLayerValue} from "./components/DataLayer"
import { getTokenFromResponse } from "./components/Spotify";
import SpotifyWebApi from 'spotify-web-api-js'
import Player from "./components/Player";

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let token = hash.access_token;

    if(token) {
      spotify.setAccessToken(token);

      dispatch ({
        type: "SET_TOKEN",
        token: token,
      })
      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user,
        })
      })
      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: "SET_PLAYLIST",
          playlists,
        })
      })
    }
  }, []);
  return (
    <div className="app">
      {
        token ? (
          <Player/>
        ) : (
          <Login />
        )
      }
    </div>
  );
};

export default App;
