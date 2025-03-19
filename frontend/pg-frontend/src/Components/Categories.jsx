import { categories } from "../catDB";
import "../Styles/Categories.scss"
import { Link } from "react-router-dom";
import React from "react";


const Categories = () => {
    return (
        <div className="categories">
            <h1>Find the Perfect PG That Feels Like Home!</h1>
            <p>
            Explore our wide range of PG accommodations designed for every lifestyle. 
            Enjoy comfort, convenience, and a hassle-free stay while experiencing the best of your new city. 
            Your ideal home away from home is just a click away!
            </p>

            <div className="categories_list">
                {categories?.slice(1, 7).map((category, index) => (
                    <Link to={`/properties/category/${category.label}`}>
                        <div className="category" key={category.label}>
                            <img src={category.img} alt={category.label} />
                            <div className="overlay"></div>
                            <div className="category_text">
                                <div className="category_text_icon">{category.icon}</div>
                                <p>{category.label}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;