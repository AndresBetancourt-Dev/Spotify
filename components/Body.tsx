import { useEffect, useState } from "react"
import { useSession } from 'next-auth/react';
import { Search } from "./Search"
import { Poster } from "./Poster";
import { Track } from "./Track";


export const Body = ({ spotifyApi, chooseTrack }) => {

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


    return (
        <section className="body md:max-w-6x1">
            <Search search={search} setSearch={setSearch} />
            <div className="poster-grid">
                {searchResults.length === 0 ? newReleases.slice(0, 4).map((track) => (
                    <Poster key={track.id} track={track} chooseTrack={chooseTrack} />
                )) : searchResults.slice(0, 4).map(track => (<Poster key={track.id} track={track} chooseTrack={chooseTrack} />))}
            </div>
            <div className="flex gap-x-8 absolute min-w-full md:relative ml-6">
                {/* Genres */}
                <div className="hidden xl:inline max-w-[270px]">
                    <h2 className="text-white font-bold mb-3">Genres</h2>
                    <div className="flex gap-x-2 gap-y-2.5 flex-wrap mb-3">
                        <div className="genre">Classic</div>
                        <div className="genre">House</div>
                        <div className="genre">Minimal</div>
                        <div className="genre">Hip-hop</div>
                        <div className="genre">Electronic</div>
                        <div className="genre">Chillout</div>
                        <div className="genre">Blues</div>
                        <div className="genre">Country</div>
                        <div className="genre">Techno</div>
                    </div>
                    <button className="button">
                        All Genres
                    </button>
                </div>
                {/* Tracks */}
                <div>
                    <h2 className="text-white font-bold mb-3">{searchResults.length === 0 ? "New Releases" : "Tracks"}</h2>
                    <div className="space-y-3 border-2 border-[#262626] rounded-2xl p-3 bg-[#0D0D0D] overflow-y-scroll h-[1000px] md:h-96 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500 w-[830px]">
                        {searchResults.length === 0
                            ? newReleases
                                .slice(4, newReleases.length)
                                .map((track) => (
                                    <Track
                                        key={track.id}
                                        track={track}
                                        chooseTrack={chooseTrack}
                                    />
                                ))
                            : searchResults
                                .slice(4, searchResults.length)
                                .map((track) => (
                                    <Track
                                        key={track.id}
                                        track={track}
                                        chooseTrack={chooseTrack}
                                    />
                                ))}
                    </div>
                </div>
            </div>
        </section >
    )
}
