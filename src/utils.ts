export function random(len:Number):String{
    let options:string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let length =options.length;
    let ans:string="";

    for(let i=0;i<length;i++){
        ans+= options[Math.floor(Math.random()*length)]
    }
    return ans;
}