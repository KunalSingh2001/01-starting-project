import React, {useState} from "react";
import NoteContext from './noteContext';

const CartState = (props) => {
    // const savedCart = JSON.parse(localStorage.getItem('cartItem')) || [];
    const [cart, setCart] = useState(
        [
            {id:1, name:"Sushi", amount:"10", quantity:1},
            {id:2, name:"Nuduls", amount:"10", quantity:1},
            {id:3, name:"Pasta", amount:"10", quantity:1},
        ]
    );

    function increaseQuantity(id) {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                return {...item, quantity:item.quantity+1}
            }
            return item;
        });
        setCart(updatedCart);
    }

    function decreseQuantity(id) {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                return {...item, quantity:item.quantity-1}
            }
            return item;
        });
        setCart(updatedCart);
    }
    return (
        <NoteContext.Provider value= {{cart, increaseQuantity, decreseQuantity}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default CartState;