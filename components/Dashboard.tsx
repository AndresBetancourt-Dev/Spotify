import SpotifyWebApi from "spotify-web-api-node";
import { Body } from "./Body"
import { Right } from "./Right"
import { Sidebar } from "./Sidebar"

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET
})

export const Dashboard = () => {
    return (
        <main>
            <Sidebar />
            <Body spotifyApi={spotifyApi} />
            <Right />
        </main>
    )
}
