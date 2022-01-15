import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs"
import { useRecoilState } from "recoil"
import { playingTrackState, playState } from "../atoms/playerAtom"
import Track from "../types/Track";

interface PosterProps {
    track: Track,
    chooseTrack: (track: Track) => void
}

export const Poster = ({ track, chooseTrack }: PosterProps) => {
    const [play, setPlay] = useRecoilState(playState);
    const [playingTrack,] = useRecoilState(playingTrackState);


    const handlePlay = () => {
        chooseTrack(track);
        if (track.uri === playingTrack.uri) {
            setPlay(!play)
        }
    }

    return (
        <div className="poster group" onClick={handlePlay}>
            <img className="poster-image" src={track.albumUrl} alt={track.title} />
            <div className="poster-info">
                <div className="poster-play">
                    {track.uri === playingTrack.uri && play ? <BsFillPauseFill className="text-xl" /> : <BsFillPlayFill className="text-xl ml-[1px]" />}
                </div>
                <div className="poster-text">
                    <h4 className="font-extrabold truncate w-44">{track.title}</h4>
                    <h6>{track.artist}</h6>
                </div>
            </div>
        </div>
    )
}
