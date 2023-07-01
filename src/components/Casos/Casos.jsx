import "./Casos.scss";
import { avatars } from "../../assets/casos";
import { casos } from "./data";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Brief from "./Brief/Brief";
import Timeline from "./Timeline/Timeline";
import CasosVideo from "./CasosVideo/CasosVideo";
import Seo from "../SEO/Seo";
const Casos = () => {
  const [caso, setCaso] = useState(0);
  let { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      let casoID = Number(id)
      if (casoID === undefined) { return }
      else if (id > 0 && id <= casos.length) {
        setCaso(casoID)
      } else {
        navigate("/notFound");
      }
    }
  }, [id, navigate]);

  const seoData = () => {
    if (caso === 0) {
      const data = {
        title: "Casos",
        description: "Conoce más sobre los casos y consecuencias de los #DatosenFuga"
      }
      return data;
    } else {
      const c = casos.find((c) => c.id === caso)
      const data = {
        title: `Caso ${c.name}`,
        description: c.tooltip,
        keywords: `${c.name}, ${c.year}, ciberseguridad, ${c.keywords}`
      }
      return data;
    }
  }

  return (
    <>
      <Seo data={seoData()} />
      <div className="casos">
        <h2 className="casos__title">
          Conocé más sobre los casos y <br /> consecuencias de los #Datosenfuga
        </h2>
        <div className="casos__avatars">

          {casos.map((c) => {
            const handleMouseOver = (event) => {
              event.currentTarget.classList.add("blur");
              event.currentTarget.src = c.mouseOver;
              event.target.nextSibling.style.visibility = "visible";
            };
            const handleMouseOut = (event) => {
              event.currentTarget.classList.remove("blur");
              event.currentTarget.src = c.avatar;
              event.target.nextSibling.style.visibility = "hidden";
            };

            if (caso !== c.id) {
              return (
                <div key={c.id} className="casos__tooltip">
                  <Link to={`/casos/${c.id}`}>
                    <img
                      src={c.avatar}
                      alt={c.name}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    />
                    <span className="casos__tooltiptext">{c.tooltip}</span>
                  </Link>
                </div>
              );
            } else {
              return (
                <div key={c.id} className="casos__tooltip">
                  <img
                    src={c.mouseOver}
                    alt={c.name}
                    onMouseOver={handleMouseOver}
                    onMouseOut={(event) => {
                      event.currentTarget.classList.remove("blur");
                      event.target.nextSibling.style.visibility = "hidden";
                    }}
                  />
                  <span className="casos__tooltiptext">{c.tooltip}</span>
                </div>
              );
            }
          })}
          {/* 
          <div className="casos__tooltip">
            <img
              src={avatars.locked}
              alt="caso bloqueado"
              onMouseOver={(event) =>
                (event.target.nextSibling.style.visibility = "visible")
              }
              onMouseOut={(event) =>
                (event.target.nextSibling.style.visibility = "hidden")
              }
            />
            <span className="casos__tooltiptext">Próximamente podrás conocer este caso</span>
          </div>
          
          <div className="casos__tooltip">
            <img
              src={avatars.locked}
              alt="caso bloqueado"
              onMouseOver={(event) =>
                (event.target.nextSibling.style.visibility = "visible")
              }
              onMouseOut={(event) =>
                (event.target.nextSibling.style.visibility = "hidden")
              }
            />
            <span className="casos__tooltiptext">Próximamente podrás conocer este caso</span>
          </div>
          
          <div className="casos__tooltip">
            <img
              src={avatars.locked}
              alt="caso bloqueado"
              onMouseOver={(event) =>
                (event.target.nextSibling.style.visibility = "visible")
              }
              onMouseOut={(event) =>
                (event.target.nextSibling.style.visibility = "hidden")
              }
            />
            <span className="casos__tooltiptext">Próximamente podrás conocer este caso</span>
          </div> */}
        </div>
        {caso !== 0 &&
          <>
            <Brief id={caso} />
            <CasosVideo id={caso} />
            <Timeline id={caso} />
          </>
        }
      </div>
    </>
  );
};

export default Casos;