import { motion } from 'framer-motion';
import { useState } from 'react';

const ModalTraducir = ({ visible, onClose, entries }) => {
    const [sourceLanguage, setSourceLanguage] = useState('');
    const [targetLanguage, setTargetLanguage] = useState('');
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');

    if (!visible) return null;

    const handleTranslate = () => {
        if (sourceLanguage && targetLanguage && word) {
            // Buscar la traducción en el array de datos
            const entry = entries.find(e => e[sourceLanguage] === word);
            if (entry) {
                setTranslation(entry[targetLanguage] || 'No hay traducción disponible');
            } else {
                setTranslation('Palabra no encontrada');
            }
        } else {
            setTranslation('Por favor ingresa todos los datos.');
        }
    };

    return (
        <div className="modal-overlay">
            <motion.div
                className='notification-success'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <h3>Traductor USIP</h3>
                </div>
                <div>
                    <form>
                        <div>
                            <label>Idioma de origen:</label>
                            <select
                                value={sourceLanguage}
                                onChange={(e) => setSourceLanguage(e.target.value)}
                            >
                                <option value="">Selecciona un idioma</option>
                                <option value="spanish">Español</option>
                                <option value="portuguese">Portugués</option>
                                <option value="english">Inglés</option>
                            </select>
                        </div>
                        <div>
                            <label>Idioma de destino:</label>
                            <select
                                value={targetLanguage}
                                onChange={(e) => setTargetLanguage(e.target.value)}
                            >
                                <option value="">Selecciona un idioma</option>
                                <option value="spanish">Español</option>
                                <option value="portuguese">Portugués</option>
                                <option value="english">Inglés</option>
                            </select>
                        </div>
                        <div>
                            <label>Palabra a traducir:</label>
                            <input
                                type="text"
                                value={word}
                                onChange={(e) => setWord(e.target.value)}
                            />
                        </div>
                        <div>
                            <button type="button" onClick={handleTranslate}>
                                Traducir
                            </button>
                        </div>
                        <div>
                            <textarea
                                value={translation}
                                readOnly
                            />
                        </div>
                    </form>
                </div>
                <button className="close-btn-success" onClick={onClose}>Cerrar</button>
            </motion.div>
        </div>
    );
};

export default ModalTraducir;