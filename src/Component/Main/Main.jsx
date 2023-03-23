import React, { useEffect, useState } from 'react';
import "./Main.css"
import Product from '../Product/Product';

const Main = () => {
    const [card, setCard] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, []);
    const handelAddToCard = (time) => {
        console.log(typeof time);
        const previousTimeS = document.getElementById('time').innerText
        // const previousTime = parseInt(previousTimeS)
        console.log( typeof previousTimeS);
        const newTime = previousTimeS + time
        setData(newTime)


    }
    return (
        <div className='card-com'>

            {/* {console.log(card)} */}
            <div className='product'>
                {
                    card.map(p => <Product p={p}
                        handelAddToCard={handelAddToCard}
                    ></Product>)
                }
            </div>
            <div>
                {console.log(data)}
                <h3>main{ }</h3>
                <h2>Showing time: <span id='time'>{data}</span></h2>
            </div>
        </div>
    );
};

export default Main;