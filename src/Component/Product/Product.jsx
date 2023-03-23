import React from 'react';
import "./product.css"

const Product = (props) => {
    const { name, age, time, img, city } = props.p
    return (
        <div>
            <div className='card'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>City:{city}</h4>
                <p>Age: {age}</p>
                <p>Time: {time}</p>
                <button onClick={() => props.handelAddToCard(time)}>Add to card</button>
            </div>
        </div>
    );
};

export default Product;