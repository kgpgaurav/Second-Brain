import { Crossicon } from "../icons/Crossicon";
import { Button } from "./Button";
import { Input } from "./Input";

export function CreateContentModal({open, onClose}) {
    

    return <div>
        {open && <div className="w-screen h-screen fixed bg-gray-950 top-0 left-0 opacity-60 flex justify-center">
            <div className="flex flex-col justify-center opacity-100">
                <span className="bg-white p-4 rounded opacity-100">
                    <div className="flex justify-end cursor-pointer" onClick={onClose}>
                        <Crossicon/>
                    </div>
                    <div className="flex-col flex">
                        <Input placeholder="Title"/>
                        <Input placeholder="Link"/>
                        
                        </div>
                        <div className="flex justify-center">
                        <Button variant="primary" text="Submit" />
                        </div>
                </span>
            </div>
            </div>}
    </div>
}

