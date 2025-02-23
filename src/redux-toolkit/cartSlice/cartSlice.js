import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Массив товаров в корзине
    },
    reducers: {
        // Установка товаров в корзину
        setCart: (state, action) => {
            state.items = action.payload;
        },
        // Добавление товара в корзину
        addToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.items.find((item) => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += 1; // Увеличиваем количество, если товар уже есть в корзине
            } else {
                state.items.push({ ...product, quantity: 1 }); // Добавляем новый товар
            }
        },
        // Удаление товара из корзины
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter((item) => item.id !== productId);
        },
        // Обновление количества товара
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find((item) => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },
        // Очистка корзины
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { setCart, addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;