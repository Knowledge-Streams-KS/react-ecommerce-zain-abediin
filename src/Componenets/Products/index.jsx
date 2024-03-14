import { useState, useEffect } from "react";
import axios from "axios";

const FetchProducts = () => {
    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products")
                setProductsData(response.data)
            } catch (error) {
                console.log(`Failed to load products ${error}`)
            }

            }
            fetchProducts()
        }, [])

    return (
        <>
            <div>
                <h1>Products</h1>
                {productsData.map((product) => (
                    <div>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <img src={product.image} alt={product.title} style={{width: '100px', height: 'auto'}} />
                    </div>
                ))}
            </div>
        </>
    );
}


export default FetchProducts;
