import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { deleteEvent } from '../../redux/eventSlice';
import styles from '../../styles/page/EventDetails.module.scss';

const EventDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const event = useSelector((state) => state.events.find((e) => e.id === id));

    // Якщо подію не знайдено, відображається повідомлення
    if (!event) {
        return <div>Подія не знайдена</div>;
    }

    // Функція для видалення події і повернення на головну сторінку
    const handleDelete = () => {
        dispatch(deleteEvent(id));
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <div className={styles.container_inner}>
                <div className={styles.title_name}>
                    <h1>{event.name}</h1>
                </div>
                <div className={styles.block_control}>
                    <p>{event.description}</p>
                    <p>Дата проведення: {new Date(event.date).toLocaleString()}</p>
                    <h3>Квитки</h3>
                    <ul className={styles.ticketList}>
                        {event.tickets.map((ticket) => (
                            <li key={ticket.id} className={styles.ticketItem}>
                                <p>Тип: {ticket.type}</p>
                                <p>Кількість: {ticket.quantity}</p>
                                <p>Ціна: {ticket.price} грн</p>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.actions}>
                        <Link to={`/event/${event.id}/edit`} className={`${styles.btn} ${styles.btnSecondary}`}>
                            Редагувати подію
                        </Link>
                        <button onClick={handleDelete} className={`${styles.btn} ${styles.btnDanger}`}>
                            Видалити подію
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
