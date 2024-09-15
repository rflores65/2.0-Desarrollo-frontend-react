import { motion } from 'framer-motion';
import { useState } from 'react';

const ModalAgregar = ({ visible, onClose, onAdd }) => {
    if (!visible) return null;

    const [formValues, setFormValues] = useState({ spanish: '', portuguese: '', english: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd(formValues);
        console.log(formValues)
        setFormValues({ spanish: '', portuguese: '', english: '' });
        onClose()
    };

    return (
        <div className="modal-overlay">
            <motion.div
                className='notification-success'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <form onSubmit={handleSubmit}>
                    <div>
                        <h3>Traductor USIP</h3>
                    </div>
                    <div>
                        Español:
                        <input
                            type="text"
                            name='spanish'
                            value={formValues.spanish}
                            onChange={(e) => setFormValues({ ...formValues, spanish: e.target.value })}
                        />
                    </div>
                    <div>
                        Inglés:
                        <input
                            type="text"
                            name="english"
                            value={formValues.english}
                            onChange={(e) => setFormValues({ ...formValues, english: e.target.value })}
                        />
                    </div>
                    <div>
                        Portugués:
                        <input
                            type="text"
                            name="portuguese"
                            value={formValues.portuguese}
                            onChange={(e) => setFormValues({ ...formValues, portuguese: e.target.value })}
                        />
                    </div>
                    <div>
                        <button type="submit">Agregar</button>
                    </div>
                </form>
                <button className="close-btn-success" onClick={onClose}>Cerrar</button>
            </motion.div>
        </div>
    );
};

export default ModalAgregar;
