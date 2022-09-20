import React from "react";
import '../Card-Product/style.css';
import { icons, images } from "../../assets";


export const CardProduct = (props) => {
    const saladEgg = images.saladEgg;
    const salad = images.salad;
    const saladFish = images.saladFish;

    const renderImage = () => {
        return props.name === 'Steweed cabbage with sauce'
            ? saladEgg
            : props.name === 'Puree soup with turkey pieces'
                ? salad
                : saladFish;
    }

    return (
        <div className="Container">

            <div className="Content-Img">
                <img src={renderImage()} alt="saladEgg" id="img" />
            </div>

            <div className="Content-Desc-Product">
                <p id="Desc-Product">{props.name}</p>
            </div>

            <div className="Content-Price-Icon">
                <div className="Content-Price">
                    <p id="price">${props.price}</p>
                </div>

                <div className="Content-Icon">
                    <button className="Button-Add">
                        <img src={icons.add} alt="add" id="icon" />
                    </button>
                </div>
            </div>

        </div>
    )
}