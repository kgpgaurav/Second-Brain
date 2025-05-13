import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn(){
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg border border-gray-300 min-w-52">
            <Input placeholder="Username" />
            <Input placeholder="password" />
            <div className="flex justify-center pt-4">
                <Button variant="primary" text="SignIn" fullWidth={true} loading={true}/>
            </div>
        </div>
    </div>
}