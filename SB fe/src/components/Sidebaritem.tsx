import { ReactElement } from "react"

export function Sidebaritem({ icon, text }: {
    icon: ReactElement;
    text: string;
}) {
    return <div className="flex items-center gap-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-200 rounded-lg max-w-44 pl-4 transition-all duration-500">
        <div className="pr-2">
            {icon}
        </div>
        <div>
            {text}
        </div>
    </div>
}