import NoteContext from './noteContext';

const CartState = (props) => {
    const savedCart = JSON.parse(localStorage.getItem('cartItem')) || [];
    return (
        <NoteContext.Provider value= {savedCart}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default CartState;