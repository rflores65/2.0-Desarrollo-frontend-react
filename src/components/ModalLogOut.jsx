import { motion } from 'framer-motion'

const ModalLogOut = ({ visible, message, action, onClose }) => {
    if (!visible) {
        return null
    }
    return (
        <div className="modal-overlay">
            <motion.div
                className='notification-success'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <p>
                        {message}
                    
                            <button  type="button" onClick={action}>
                                Presiona aqui para salir!!!
                            </button>
                    </p>
                </div>
                <button className="close-btn-success" onClick={onClose}>Cerrar</button>
            </motion.div>
        </div>
    )
}

export default ModalLogOut;