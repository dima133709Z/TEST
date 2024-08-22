import styles from "../../../styles/element/TicketForm.module.scss";

const TicketForm = ({ ticket, index, handleTicketChange, removeTicket }) => (

    <div key={ticket.id} className={styles.ticket}>

        <input
            type="text"
            placeholder="Тип квитка"
            value={ticket.type}
            onChange={(e) => handleTicketChange(index, 'type', e.target.value)}
            className={styles.input}
        />

        <input
            type="number"
            placeholder="Кількість"
            value={ticket.quantity}
            onChange={(e) => handleTicketChange(index, 'quantity', e.target.value)}
            className={styles.input}
        />

        <input
            type="number"
            placeholder="Ціна"
            value={ticket.price}
            onChange={(e) => handleTicketChange(index, 'price', e.target.value)}
            className={styles.input}
        />

        <button type="button" onClick={() => removeTicket(index)} className={styles.btnRemove}>
            Видалити квиток
        </button>

    </div>
);
export default TicketForm;