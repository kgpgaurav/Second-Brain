import { ReactElement } from "react";

interface Buttonprops{
    variant: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
    onClick?: ()=>void;
    fullWidth?: boolean;
    loading?: boolean;
}
// let firstName="kgp"
// let lastName="singh"
// let fullName=firstName +" "+lastName;
// OR
// let fullName= `${firstName} ${lastName}`

const variantClasses={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-500"
}
const defaultStyle="px-4 py-2 rounded-md flex items-center justify-center";

export function Button({variant,text,startIcon, onClick, fullWidth, loading}:Buttonprops){
    return <button onClick={onClick} className={variantClasses[variant]+" "+defaultStyle+`${(fullWidth?" w-full justify-center items-center":"")} ${loading? "opacity-30":""}`} disabled={loading}>
        
            <div className="pr-2">
            {startIcon}
        </div>
        {text}
        
    </button>
}