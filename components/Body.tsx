import { useEffect, useState } from "react"
import { useSession } from 'next-auth/react';
import { Search } from "./Search"
import { Poster } from "./Poster";


export const Body = ({ spotifyApi }) => {

    const { data: session } = useSession();
    const { accessToken } = session;
    const [search, setSearch] = useState<string>("");
    const [searchResults, setSearchResults] = useState<Array<Object>>([]);
    const [newReleases, setNewReleases] = useState<Object[]>([]);


    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken])

    //Searching...
    useEffect(() => {
        if (!search) return setSearchResults([]);
        if (!accessToken) return;

        spotifyApi.searchTracks(search).then((response) => {
            setSearchResults(
                response.body.tracks.items.map((track) => {
                    return {
                        id: track.id,
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: track.album.images[0].url,
                        popularity: track.popularity,
                    };
                })
            );
        })
    }, [search, accessToken])

    // New Releases...
    useEffect(() => {
        if (!accessToken) return;

        spotifyApi.getNewReleases().then((res) => {
            setNewReleases(
                res.body.albums.items.map((track) => {
                    return {
                        id: track.id,
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: track.images[0].url,
                    };
                })
            );
        });
    }, [accessToken]);

    const chooseTrack = () => {

    }

    return (
        <section className="body md:max-w-6x1">
            <Search search={search} setSearch={setSearch} />
            <div className="poster-grid">
                {searchResults.length === 0 ? newReleases.slice(0, 4).map((track) => (
                    <Poster key={track.id} track={track} chooseTrack={chooseTrack} />
                )) : searchResults.slice(0, 4).map(track => (<Poster key={track.id} track={track} chooseTrack={chooseTrack} />))}
            </div>
        </section>
    )
}
