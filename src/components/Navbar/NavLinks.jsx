import { Link } from 'react-router-dom';
const NavLinks = () => {
    return (
        <>
            <li>
                <Link smooth to="/">Proyecto</Link>
            </li>
            <li>
                <a href="/#paper">Paper</a>
            </li>
            <li>
                <a href="/#ABC">ABC</a>
            </li>
            <li>
                <a href="/#entrevistas">Entrevistas</a>
            </li>
            <li>
                <Link to="/casos">Casos</Link>
            </li>
            <li>
                <Link to="/muestra">Muestra</Link>
            </li>
            <li>
                <Link to="/encuentros">Encuentros</Link>
            </li>
            <li>
                <a href="/#organizaciones">Quiénes somos</a>
            </li>
        </>
    )
}

export default NavLinks;