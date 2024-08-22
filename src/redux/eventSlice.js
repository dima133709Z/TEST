import { createSlice } from '@reduxjs/toolkit';
import eventData from '../data/events.json';

const eventSlice = createSlice({
    name: 'events',
    initialState: eventData,
    reducers: {

        // Додає до списку подій.
        addEvent: (state, action) => {
            state.push(action.payload);
        },

        // Редагує на основі її id.
        // Знаходимо за індексом та оновлюємо даними.
        editEvent: (state, action) => {
            const index = state.findIndex(event => event.id === action.payload.id);
            state[index] = action.payload;
        },

        // Видаляє на основі її id.
        // Повертає новий масив, який не містить об'єкта з вказаним id.
        deleteEvent: (state, action) => {
            return state.filter(event => event.id !== action.payload);
        }
    },
});

export const { addEvent, editEvent, deleteEvent } = eventSlice.actions;

export default eventSlice.reducer;
