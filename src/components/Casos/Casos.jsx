import "./Casos.scss";
import { avatars } from "../../assets/casos";
import { casos } from "./data";
import { useState } from "react";

const Casos = () => {
  const [caso, setCaso] = useState(1);

  return (
    <div className="casos">
      <h2 className="casos__title">
        Conocé mas sobre los casos y <br /> consecuencias de los #Datosenfuga
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
          const handleOnClick = () => {
            setCaso(c.id);
          };
          if (caso !== c.id) {
            return (
              <div key={c.id} className="casos__tooltip">
                <img
                  src={c.avatar}
                  alt={c.name}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={handleOnClick}
                />
                <span class="casos__tooltiptext">{c.tooltip}</span>
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
                <span class="casos__tooltiptext">{c.tooltip}</span>
              </div>
            );
          }
        })}
{/*/////////////////////////////////////////////////// CASOS NO DESBLOQUEADOS PENDIENTES DE MAPEO */}
{/* CASO 2 */}
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
          <span class="casos__tooltiptext">Caso aún no desbloqueado</span>
        </div>
{/* CASO 3 */}
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
          <span class="casos__tooltiptext">Caso aún no desbloqueado</span>
        </div>
{/* CASO 4 */}
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
          <span class="casos__tooltiptext">Caso aún no desbloqueado</span>
        </div>
{/* CASO 5 */}
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
          <span class="casos__tooltiptext">Caso aún no desbloqueado</span>
        </div>
{/* CASO 6 */}
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
          <span class="casos__tooltiptext">Caso aún no desbloqueado</span>
        </div>
      </div>
    </div>
  );
};

export default Casos;
