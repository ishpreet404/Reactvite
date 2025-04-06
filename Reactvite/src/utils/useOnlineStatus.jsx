import { useEffect, useState } from "react";

 
const useOnlineStatus = () => {
    //check if online
    const [onstatus, setonstatus] = useState(navigator.onLine);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setonstatus(false);
        })
        window.addEventListener("online", () => {
            setonstatus(true);
        })
        
    },[])
    return onstatus;
}
export default useOnlineStatus;