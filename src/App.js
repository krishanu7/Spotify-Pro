import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import { getTokenFromResponse } from "./components/Spotify";
import SpotifyWebApi from 'spotify-web-api-js'
import Player from "./components/Player";
const spotify = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const token = hash.access_token;
    if(token) {
      setToken(token);
      spotify.setAccessToken(token);
      spotify.getMe().then(user => {
        console.log(user);
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
