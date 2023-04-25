import { HashLink } from "react-router-hash-link";
import { logos } from "../../constants";
const NavLinks = () => {
    return (
        <>
            <li>
                <Link to="/">Proyecto</Link>
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