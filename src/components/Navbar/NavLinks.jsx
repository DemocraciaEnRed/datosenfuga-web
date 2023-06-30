import { HashLink } from "react-router-hash-link";
const NavLinks = () => {
    return (
        <>
            <li>
                <HashLink smooth to="/">Proyecto</HashLink>
            </li>
            <li>
                <HashLink smooth to="/#paper">Paper</HashLink>
            </li>
            <li>
                <HashLink smooth to="/#ABC">ABC</HashLink>
            </li>
            <li>
                <HashLink smooth to="/#entrevistas">Entrevistas</HashLink>
            </li>
            <li>
                <HashLink to="/casos">Casos</HashLink>
            </li>
            <li>
                <HashLink smooth to="/amparo">Amparo</HashLink>
            </li>
            <li>
                <HashLink to="/muestra">Muestra</HashLink>
            </li>
            <li>
                <HashLink to="/encuentros">Encuentros</HashLink>
            </li>
            <li>
                <HashLink smooth to="/#organizaciones">Quiénes somos</HashLink>
            </li>
        </>
    )
}

export default NavLinks;