import useForm from "../../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import { cleanFormData, saveFormData } from "../../../redux/form/FormActions";
import { motion } from 'framer-motion';
import ModalInfo from "../../../components/ModalInfo";
import ModalLogOut from "../../../components/ModalLogOut";
import { useState } from "react";

const LoginForm = () => {
    const [values, handleChange, cleanData] = useForm({ username: '', email: '', password: '' });
    const [showModalInfo, setShowModalInfo] = useState(false)
    const [showModalPassword, setShowModalPassword] = useState(false)
    const [isVisiblePassword, setVisiblePassword] = useState(false)
    const [showModalLogout, setShowModalLogout] = useState(false)
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        if (values.password === 'mod7ReactUSIP') {
            setShowModalInfo(true)
            event.preventDefault()
            console.log(values)
            dispatch(saveFormData(values))
        } else {
            event.preventDefault()
            setShowModalPassword(true)
        }
    }
    const handleLogOut = () => {
        cleanData()
        dispatch(cleanFormData())
        console.log(values)
        setShowModalLogout(false)
    }
    const showLogOut = () => {
        setShowModalLogout(true)
    }
    const hideLogOut = () => {
        setShowModalLogout(false)
    }
    const handlePassword = () => {
        setVisiblePassword(!isVisiblePassword)
    }

    const hideModalInfo = () => {
        setShowModalInfo(false)
    }
    const hideModalPassword = () => {

        setShowModalPassword(false)
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >


            <div className="container">
                <ModalInfo visible={showModalPassword} message="Password Incorrecto" onClose={hideModalPassword} />
                <ModalInfo visible={showModalInfo} message="Bienvenidos al Modulo 7" onClose={hideModalInfo} />
                <ModalLogOut
                    visible={showModalLogout}
                    message="Esta seguro que desea cerrar Sesion?  "
                    action = {handleLogOut}
                    onClose={hideLogOut}
                />
                <form onSubmit={handleSubmit}>
                    <h2>Login Form</h2>
                    <h5>email: {form.formData.email}</h5>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type={isVisiblePassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <div>
                                <button type="button" onClick={handlePassword}>Show</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="button-container">
                            <button type="submit" onClick={handleSubmit}>Submit</button>
                        </div>
                        <div>
                            <button type="button" onClick={showLogOut}>Cerrar sesion</button>
                        </div>
                    </div>
                </form>
            </div>
        </motion.div>


    );
}

export default LoginForm;