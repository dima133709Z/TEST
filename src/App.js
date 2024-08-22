import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import EventList from './page/EventList/EventList';
import EventForm from './page/EventForm/EventForm';
import EventDetails from './page/EventDetalis/EventDetails';
import './main.css';

function App() {
    return (
        // Провайдер store. Завдяки ньому, всі компоненти в додатку отримують доступ до стану Redux.
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<EventList />} />
                    <Route path="/create" element={<EventForm />} />
                    <Route path="/event/:id" element={<EventDetails />} />
                    <Route path="/event/:id/edit" element={<EventForm />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
