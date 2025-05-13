import { useRef } from "react";
import axios from "axios";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../components/config";


export function Signup(){
    // const usernameRef= useRef<HTMLInputElement>(null);
    // const passwordRef= useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signup(){
        const username= usernameRef.current?.value;
        const password= passwordRef.current?.value;

        console.log('Username:', username);  // Log the username
        console.log('Password:', password);

        await axios.post(BACKEND_URL + "/api/v1/signup", {
            username,
            password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        alert("You have signed up successfully");
    }


    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg border border-gray-300 min-w-52">
            <Input ref={usernameRef}placeholder="Username" />
            <Input ref={passwordRef} placeholder="password" />
            <div className="flex justify-center pt-4">
                <Button onClick={signup} variant="primary" text="Submit" fullWidth={true} loading={false}/>
            </div>
        </div>
    </div>
}