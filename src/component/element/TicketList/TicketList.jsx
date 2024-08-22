import React from 'react';
import TicketForm from "../TicketForm/TicketForm";
import styles from '../../../styles/element/TicketList.module.scss';


const TicketList = ({tickets, handleTicketChange, removeTicket, addTicket}) => {
    return (
        <div>
            <h3>Квитки</h3>
            {tickets.map((ticket, index) => (
                <TicketForm
                    key={ticket.id}
                    ticket={ticket}
                    index={index}
                    handleTicketChange={handleTicketChange}
                    removeTicket={removeTicket}
                />
            ))}
            <button type="button" onClick={addTicket} className={styles.btn}>
                Додати квиток
            </button>
        </div>
    );
};

export default TicketList;
