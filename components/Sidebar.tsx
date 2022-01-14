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
        <aside className="sidebar">
            <Image src={"https://rb.gy/xkacau"} width={56} height={56} objectFit="contain" />
            <div className="flex flex-col space-y-8">
                <HomeIcon className="sidebar-icon text-white opacity-[0.85]" />
                <RiCompassFill className="sidebar-icon text-2xl" />
                <FaMicrophoneAlt className="sidebar-icon ml-1" />
                <ChartBarIcon className="sidebar-icon" />
                <ClockIcon className="sidebar-icon" />
                <DotsHorizontalIcon className="sidebar-icon" /></div>
        </aside>
    )
}
