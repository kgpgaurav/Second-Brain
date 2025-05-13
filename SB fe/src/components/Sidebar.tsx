import { Brainly } from "../icons/brainly";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { Sidebaritem } from "./Sidebaritem";

export function SideBar(){
    return <div className="border-r border-gray-400 h-screen w-72 fixed bg-white shadow-lg pl-5 pt-5">
        <div className="text-2xl text-black font-bold">
        <Sidebaritem text="Brainly" icon={<Brainly/>} />
        </div>
        <div className="py-2">
        <Sidebaritem text="Twitter" icon={<TwitterIcon/>} />
        <Sidebaritem text="Youtube" icon={<YoutubeIcon/>} />
        </div>
    </div>
}