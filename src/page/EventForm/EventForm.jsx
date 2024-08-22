import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {addEvent, editEvent} from '../../redux/eventSlice';
import EventDetailsForm from "../../component/element/EventDetailsForm/EventDetailsForm";
import TicketList from "../../component/element/TicketList/TicketList";
import styles from '../../styles/page/EventForm.module.scss';

const EventForm = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const event = useSelector((state) => state.events.find((e) => e.id === id));

    // Створення стану для полів форми: назва, опис, дата та квитки
    const [name, setName] = useState(event ? event.name : '');
    const [description, setDescription] = useState(event ? event.description : '');
    const [date, setDate] = useState(event ? event.date : '');
    const [tickets, setTickets] = useState(event ? event.tickets : []);

    // Обробка відправки форми
    const handleSubmit = (e) => {
        e.preventDefault();

        // Створення нового об'єкта події або використання існуючого
        const newEvent = {
            id: event ? event.id : Date.now().toString(),
            name,
            description,
            date,
            tickets,
        };

        if (event) {
            dispatch(editEvent(newEvent));
        } else {
            dispatch(addEvent(newEvent));
        }

        navigate('/');
    };

    // Додавання нового квитка до події
    const addTicket = () => {
        setTickets([...tickets, {id: Date.now().toString(), type: '', quantity: 0, price: 0}]);
    };

    // Обробка змін у полі квитка
    const handleTicketChange = (index, field, value) => {
        const newTickets = tickets.map((ticket, i) =>
            i === index ? {...ticket, [field]: value} : ticket
        );
        setTickets(newTickets);
    };

    // Видалення квитка з події
    const removeTicket = (index) => {
        const newTickets = tickets.filter((_, i) => i !== index);
        setTickets(newTickets);
    };

    return (
        <div className={styles.container}>
            <div className={styles.container_inner}>
                <div className={styles.title_name}>
                    <h1>{event ? 'Редагування події' : 'Створення нової події'}</h1>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <EventDetailsForm
                        name={name}
                        setName={setName}
                        description={description}
                        setDescription={setDescription}
                        date={date}
                        setDate={setDate}
                    />
                    <TicketList
                        tickets={tickets}
                        handleTicketChange={handleTicketChange}
                        removeTicket={removeTicket}
                        addTicket={addTicket}
                    />
                    <button type="submit" className={styles.btn}>
                        Зберегти
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EventForm;
