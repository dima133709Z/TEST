import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/element/EventListItem.module.scss';

const EventListItem = ({ event }) => (
    // Компонент EventListItem отримує об'єкт event як пропс і повертає JSX для відображення інформації про подію.
    <li key={event.id} className={styles.eventItem}>

        <h3>{event.name}</h3>
        <p>Дата: {new Date(event.date).toLocaleDateString()}</p>
        <p>Кількість квитків: {event.tickets.length}</p>

        <Link to={`/event/${event.id}`} className={styles.btn}>
            Переглянути
        </Link>

    </li>
);

export default EventListItem;
