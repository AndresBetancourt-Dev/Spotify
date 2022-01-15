import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import SpotifyWebApi from "spotify-web-api-node";
import { playingTrackState } from "../atoms/playerAtom";
import Track from "../types/Track";
import { Body } from "./Body"
import { Player } from "./Player";
import { Right } from "./Right"
import { Sidebar } from "./Sidebar"

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET
})

export const Dashboard = () => {

    const { data: session } = useSession();
    const accessToken = session?.accessToken;

    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
    const [showPlayer, setShowPlayer] = useState(false);

    useEffect(() => {
        if (playingTrack.uri) setShowPlayer(true);

    }, [playingTrack]);

    const chooseTrack = (track: Track) => {
        setPlayingTrack(track);
    }
    return (
        <main className="main">
            <Sidebar />
            <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
            <Right spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
            {showPlayer &&
                <div className="fixed bottom-0 inset-x-0 z-50">
                    <Player accessToken={accessToken as string} trackUri={playingTrack.uri} />
                </div>
            }
        </main>
    )
}
