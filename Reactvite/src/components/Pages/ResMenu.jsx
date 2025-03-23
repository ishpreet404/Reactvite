import { useEffect, useState } from "react";
import Shimmer from "../home/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";


const Resmenu = () => {
    useEffect(() => {
        FetchMenu();
    }, [])
 
    const [resInfo, setresInfo] = useState(null);
    // const param = useParams();
    // console.log(param);
    
    const { resid } = useParams();
    
    const FetchMenu = async () => {
        const data = await fetch(MENU_API+resid)
        const jsoo = await data.json();
        setresInfo(jsoo);
    }
    const name  = resInfo?.data?.cards[2]?.card?.card?.info.name;
    const cuisines  = resInfo?.data?.cards[2]?.card?.card?.info.cuisines.join(",");
    const costfortwo = resInfo?.data?.cards[2]?.card?.card?.info.costForTwoMessage;
    const itemCards = resInfo?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
    const itemprice = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info.price;
    if (resInfo===null) return <Shimmer/>;

    const meow = itemCards.map((bo) => {
        return bo.card.info.name
    })
    const iddd = itemCards.map((bo) => {
        return bo.card.info.id
    })
    


    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines+" - "+costfortwo}</h3>
            {/* <h1>{resInfo?.data.cards[1].card.card.gridElements?.infoWithStyle.restaurants.cuisins}</h1> */}
            <h2>Menu</h2>

            {/* <h2>{itemCards.name + " Price : "+ "₹"+itemprice/100}</h2> */}
            <ul>
                <li>{meow.map((item) => <li >{item}</li> )}</li>
            </ul>
        </div>
    )
}
export default Resmenu;