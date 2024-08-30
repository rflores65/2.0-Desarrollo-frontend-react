import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const username = useSelector((state)=>state.form.formData.username)
    return (
        <nav>
            <ul>
                <li>
                    <Link to ="/">Home</Link>
                </li>

                <li>
                    <Link to="/default">Default</Link>
                </li>

                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/forms">Form</Link>
                </li>
            </ul>
            <div className='navUser'>
                <p>Bienvenido: {username}</p>
            </div>
        </nav>
    )
}

export default Navbar