import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './eventSlice';

// Створюємо Store за допомогою configureStore.
export const store = configureStore({
    // Вказуємо об'єкт reducer, який містить всі ред'юсери для додатку.
    reducer: {
        events: eventReducer,
    },
});
