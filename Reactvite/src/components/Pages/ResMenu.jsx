import { useEffect, useState } from "react";
import Shimmer from "../home/Shimmer";

const Resmenu = () => {
    useEffect(() => {
        FetchMenu();
    }, [])
    const [resInfo, setresInfo] = useState(null);
    const FetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=718473&catalog_qa=undefined&submitAction=ENTER")
        const jsoo = await data.json();
        console.log(jsoo);
        setresInfo(jsoo);
    }
    const name  = resInfo?.data?.cards[2]?.card?.card?.info.name;
    const cuisines  = resInfo?.data?.cards[2]?.card?.card?.info.cuisines.join(",");
    const costfortwo = resInfo?.data?.cards[2]?.card?.card?.info.costForTwoMessage;
    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info;
    const itemprice = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info.price;
    if (resInfo===null) return <Shimmer/>;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines+" - "+costfortwo}</h3>
            {/* <h1>{resInfo?.data.cards[1].card.card.gridElements?.infoWithStyle.restaurants.cuisins}</h1> */}
            <h2>Menu</h2>

            {/* <h2>{itemname + " Price : "+ "₹"+itemprice/100}</h2> */}
            <ul>
                {/* <li>{itemCards.map((item) => <li>{item?.name}</li> )}</li> */}
            </ul>
        </div>
    )
}
export default Resmenu;