import Image from "next/image";
import {
    ChartBarIcon,
    ClockIcon,
    DotsHorizontalIcon,
    HomeIcon,
} from "@heroicons/react/solid";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";

export const Sidebar = () => {
    return (
        <aside className="flex flex-col fixed top-0 z-40 p-4 items-center bg-black w-24 h-screen space-y-8">
            <Image src={"https://rb.gy/xkacau"} width={56} height={56} objectFit="contain" />
            <div className="flex flex-col space-y-8">
                <HomeIcon className="sidebarIcon text-white opacity-[0.85]" />
                <RiCompassFill className="sidebarIcon text-2xl" />
                <FaMicrophoneAlt className="sidebarIcon ml-1" />
                <ChartBarIcon className="sidebarIcon" />
                <ClockIcon className="sidebarIcon" />
                <DotsHorizontalIcon className="sidebarIcon" /></div>
        </aside>
    )
}
