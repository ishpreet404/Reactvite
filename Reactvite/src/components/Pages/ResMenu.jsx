import { useEffect } from "react";

const Resmenu = () => {
    useEffect(() => {
        FetchMenu();
    }, [])
    const FetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=718473&catalog_qa=undefined&submitAction=ENTER")
        const jsoo = await data.json();
        console.log(jsoo);
    }
    return (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Burger</li>
            </ul>
        </div>
    )
}
export default Resmenu;