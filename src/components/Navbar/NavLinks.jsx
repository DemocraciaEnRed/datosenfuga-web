import { HashLink } from "react-router-hash-link";
import { logos } from "../../constants";
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
                <HashLink to="/muestra">Muestra</HashLink>
            </li>
            <li>
                <HashLink to="/acciones">Encuentros</HashLink>
            </li>
            <li>
                <HashLink smooth to="/#organizaciones">Quiénes somos</HashLink>
            </li>
            <li>
                <a href="https://drive.google.com/file/d/1E98MIeIvUPRuz2jz_EODQy4TKd3Xahnw/view" className="link-pdf" target="_blank" rel="noreferrer">Amparo  <img src={logos.pdf}  alt="pdf logo" /></a>
            </li>
            <li>
                <a href="https://drive.google.com/file/d/1kw6bYhov5m9-YloW4B5_d8OiasdJzIwO/view" className="link-pdf" target="_blank" rel="noreferrer">Gacetilla  <img src={logos.pdf} alt="pdf logo" /></a>
            </li>
        </>
    )
}

export default NavLinks;