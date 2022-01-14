import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs"

export const Poster = (props) => {
    return (
        <div className="poster group">
            <img className="h-full w-full object-cover absolute inset-0 rounded-[50px] opacity-80 group-hover:opacity-100" src={props.track.albumUrl} alt={props.track.title} />
            <div className="absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5">
                <div className="h-10 w-10 bg-[#15883e] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#1db954] ">
                    <BsFillPauseFill className="text-xl" />
                    <BsFillPlayFill className="text-xl ml-[1px]" />
                </div>
            </div>
        </div>
    )
}
