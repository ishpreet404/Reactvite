import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useResmenu = (resid) => {
    const [resinfo, setresInfo] = useState(null);
    useEffect(() => {
        FetchMenu();
    }, [])
    const FetchMenu = async () => {
        const data = await fetch(MENU_API+resid)
        const jsoon = await data.json();
        setresInfo(jsoon);
}
    return resinfo;
}

export default useResmenu;