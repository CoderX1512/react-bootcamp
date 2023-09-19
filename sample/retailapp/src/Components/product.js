import React from "react";

const Product = () => {
    return (
        <div>
            <h1>Our Products</h1>
            <table border="1">
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Brand</th>
                        </tr>
                        <tr>
                            <td>Laptop</td>
                            <td>$1000</td>
                            <td>HP</td>
                        </tr>
                        <tr>
                            <td>Smartphone</td>
                            <td>$500</td>
                            <td>Apple</td>
                        </tr>
                        <tr>
                            <td>Headphones</td>
                            <td>$50</td>
                            <td>Sony</td>
                        </tr>
    
            </table>
        </div>
    );
};

export default Product;