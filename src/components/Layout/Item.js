import React from 'react';
import classes from './Item.module.css';
const ItemArray  = [
    {name: 'Sushi', discription: "Finest fish and veggis", amount: 22.99},
    {name: 'Burgur', discription: "Finest burgus and veggis", amount: 22.99},
    {name: 'Pizza', discription: "Finest pizza and veggis", amount: 22.99}
];

function Item () {
    return (
        <>
            <div className={classes['meals-list']}>
                {ItemArray.map((item) => (
                    <>
                        <div className={classes['meal-item']} key={item.id}>
                            <h6>{item.name}</h6>
                            <p>{item.discription}</p>
                            <h6 className={classes['price']} >{item.amount}</h6>
                        </div>
                        <hr/>
                    </>
                ))}
            </div>
        </>
    );
}

export default Item;