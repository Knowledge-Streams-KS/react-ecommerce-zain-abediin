import React from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const { productID } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <h1>Product Description</h1>
            {productID ? (
                <>
                    <h2>Product Name: {productID}</h2>
                </>
            ) : (
                <>
                    <h2>No Product Found</h2>
                    <button onClick={() => navigate("/")}>Go to Home Page</button>
                    <NavLink to="/">Go to Home page</NavLink>
                </>
            )}
        </>
    );
}

export default ProductDetails;
