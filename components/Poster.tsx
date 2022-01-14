import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs"
import { useRecoilState } from "recoil"
import { playingTrackState, playState } from "../atoms/playerAtom"

export const Poster = ({ track, chooseTrack }) => {
    const [play, setPlay] = useRecoilState(playState);
    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);


    const handlePlay = () => {
        chooseTrack(track);
        if (track.uri === playingTrack.uri) {
            setPlay(!play)
        }
    }

    return (
        <div className="poster group" onClick={handlePlay}>
            <img className="h-full w-full object-cover absolute inset-0 rounded-[50px] opacity-80 group-hover:opacity-100" src={track.albumUrl} alt={track.title} />
            <div className="absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5">
                <div className="h-10 w-10 bg-[#15883e] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#1db954] ">
                    {track.uri === playingTrack.uri && play ? <BsFillPauseFill className="text-xl" /> : <BsFillPlayFill className="text-xl ml-[1px]" />}
                </div>
                <div className="text-[15px]">
                    <h4 className="font-extrabold truncate w-44">{track.title}</h4>
                    <h6>{track.artist}</h6>
                </div>
            </div>
        </div>
    )
}
