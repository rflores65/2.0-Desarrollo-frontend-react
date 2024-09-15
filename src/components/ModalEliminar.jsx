import { motion } from 'framer-motion';
import { useState } from 'react';

const ModalEliminar = ({ visible, onClose, onRemove }) => {
    const [wordToRemove, setWordToRemove] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        onRemove(wordToRemove)
        setWordToRemove('')
        onClose()
    };

    if (!visible) return null;

    return (
        <div className="modal-overlay">
            <motion.div
                className="modal-content"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h3>Eliminar Palabra</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Palabra:</label>
                        <input
                            type="text"
                            value={wordToRemove}
                            onChange={(e) => setWordToRemove(e.target.value)}
                        />
                    </div>
                    <button type="submit">Eliminar</button>
                    <button type="button" onClick={onClose}>Cerrar</button>
                </form>
            </motion.div>
        </div>
    );
};

export default ModalEliminar;