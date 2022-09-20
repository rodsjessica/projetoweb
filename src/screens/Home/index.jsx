import React from "react";
import { images } from "../../assets";
import '../Home/style.css';
import { CardProduct } from "../../components/Card-Product";
import data from '../Home/data.json';

export const Home = () => {
    const dataProduct = data[0].product;

    return (
        <div className="Home">
            <div className="Content-Header-Image">

                <div className="Content-Header">

                    <div className="Title">
                        <h1>We Provide <br />
                            Delivery Within <br />
                            30 min
                        </h1>
                    </div>
                    <div className="Info">
                        <p>Imagine you don't need a diet because we provide <br />
                            healthy and delicious food for you!</p>
                    </div>

                </div>

                <div className="Content-Image">
                    <img src={images.delivery} alt="delivery" id="Img" />
                </div>

            </div>

            <div className="Wrapper-CardProduct">
                    {
                        dataProduct &&
                        dataProduct.map((item) => {
                            return <CardProduct name={item.name}  price={item.price} />
                        })
                    }
            </div>
        </div>

    )
}