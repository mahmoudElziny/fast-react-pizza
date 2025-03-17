import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            //payload = newItem
            state.cart.push(action.payload);
        },
        removeItem(state, action) {
            //payload = pizzaId
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
        },
        increaseItemQuantity(state, action) {
            //payload = pizzaId
            const item = state.cart.find(item => item.id === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantity(state, action) {
            //payload = pizzaId
            const item = state.cart.find(item => item.id === action.payload);
            item.quantity--;
            if (item.quantity === 0) {
                state.cart = state.cart.filter(item => item.id !== action.payload);
            } else {
                item.totalPrice = item.quantity * item.unitPrice;
            }
        },
        clearCart(state) {
            state.cart = [];
        },
    }
});

export const { addItem, removeItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

//selectors
export const getTotalCartQuantity = (state) => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

//reselect library to opimize these selectors