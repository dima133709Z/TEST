import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import EventListItem from '../../component/element/EventListItem/EventListItem';
import styles from '../../styles/page/EventList.module.scss';

const EventList = () => {

    // Отримання списку подій з сховища
    const events = useSelector((state) => state.events);

    // Створення стану для зберігання поточного фільтру та відсортованих подій
    const [filter, setFilter] = useState('date');
    const [sortedEvents, setSortedEvents] = useState(events);
    const [selectedDate, setSelectedDate] = useState('');


    // Обробник зміни фільтрації
    const handleFilterChange = (e) => {
        const filterValue = e.target.value;
        setFilter(filterValue);
        applyFilter(filterValue, selectedDate);
    };

    // Обробник зміни дати
    const handleDateChange = (e) => {
        const dateValue = e.target.value;
        setSelectedDate(dateValue);
        applyFilter(filter, dateValue);
    };

    // Функція для застосування фільтрації та сортування до списку подій
    const applyFilter = (filterValue, dateValue) => {
        let filteredEvents = [...events];

        // Фільтрація подій за вибраною датою, якщо вона встановлена
        if (dateValue) {
            filteredEvents = filteredEvents.filter((event) => {
                const eventDate = new Date(event.date).toISOString().split('T')[0];
                return eventDate === dateValue;
            });
        }

        // Сортування подій на основі вибраного фільтра
        let sorted;
        switch (filterValue) {
            case 'name':
                sorted = filteredEvents.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'tickets':
                sorted = filteredEvents.sort((a, b) => b.id - a.id); // Сортировка по ID, где последние добавленные показываются первыми
                break;
            case 'date':
            default:
                sorted = filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date)); // Сортировка по дате
                break;
        }
        setSortedEvents(sorted);
    };


    return (
        <div className={styles.container}>
            <div className={styles.container_inner}>

                <div className={styles.title_name}>
                    <h1>Список подій</h1>
                </div>

                <div className={styles.block_control}>

                    <div className={styles.filtration_actions}>

                            <input
                                type="date"
                                value={selectedDate}
                                onChange={handleDateChange}
                            />

                        <div className={styles.filtration}>
                            <select
                                value={filter}
                                onChange={handleFilterChange}
                                className={styles.filtrationDropdown}
                            >
                                <option value="date">За датою</option>
                                <option value="name">За назвою</option>
                                <option value="tickets">За кількістю квитків</option>
                            </select>
                        </div>

                    </div>

                    <div className={styles.actions}>
                        <Link to="/create">
                            Створити нову подію
                        </Link>
                    </div>

                    <ul>
                        {sortedEvents.map((event) => (
                            <EventListItem key={event.id} event={event}/>
                        ))}
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default EventList;
