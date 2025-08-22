import React from 'react';
import classes from './Item.module.css';
import Button from './Button';
const ItemArray  = [
    { id: 1, name: 'Sushi', discription: "Finest fish and veggis", amount: 22.99},
    { id: 2, name: 'Burgur', discription: "Finest burgus and veggis", amount: 22.99},
    { id: 3, name: 'Pizza', discription: "Finest pizza and veggis", amount: 22.99}
];


function Item () {
    return (
        <>
            <div className={classes['meals-list']}>
                {ItemArray.map((item) => (
                    <React.Fragment key={item.id}>
                        <div className={classes['meal-item']} key={item.id}>
                            <h6>{item.name}</h6>
                            <p>{item.discription}</p>
                            <h6 className={classes['price']} >{item.amount}</h6>
                            <div className={classes['item-actions']}>
                                <b>Amount</b> <input
                                    type="number"
                                    defaultValue="1"
                                    className="form-control form-control-sm d-inline-block ms-2"
                                    style={{ width: "60px" }}
                                />
                                <Button name="+ Add"/>
                            </div>
                        </div>
                        <hr/>
                    </React.Fragment>
                ))}
            </div>
        </>
    );
}

export default Item;