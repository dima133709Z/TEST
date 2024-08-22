import React from 'react';
import styles from '../../../styles/element/EventDetailsForm.module.scss';

const EventDetailsForm = ({name, setName, description, setDescription, date, setDate}) => {
    return (
        <>

            <div>
                <label>Назва події:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={styles.input}
                />
            </div>

            <div>
                <label>Опис події:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className={styles.textarea}
                />
            </div>

            <div>
                <label>Дата та час проведення:</label>
                <input
                    type="datetime-local"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className={styles.input}
                />
            </div>

        </>
    );
};

export default EventDetailsForm;
