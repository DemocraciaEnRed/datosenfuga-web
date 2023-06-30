import React from 'react'
import { logos } from "../../../constants"
import "./ActividadVideo.scss"

const ActividadVideo = ({ data }) => {
      return (
        // <div className='actividadVideo'>
        <div>
          {/* <div>
            <iframe src={data.urlVideo} title="Encuentro Regional de Políticas Públicas de Seguridad Informática" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div> */}
          <div className='actividadVideo__members'>
            <p className='membersTitle'>¿Quiénes lo conforman?</p>
            <p className='membersRole'>Moderador</p>
            {
              data.moderators.map((d) => {
                return (
                  <div className='members__info' key={d.id}>
                    <img src={d.image} alt={d.name} className='memberImage' />
                    <div className='memberData'>
                      <p className='memberData__name'>{d.name} {d.linkedinUrl !== '' ? <a href={d.linkedinUrl} target="_blank" rel="noreferrer"><img src={logos.linkedin} alt={`Linkedin ${d.name}`} className='icon' /></a> : ''} {d.twitterUrl !== '' ? <a href={d.twitterUrl} target="_blank" rel="noreferrer"><img src={logos.twitterbg} alt={`Linkedin ${d.name}`} className='icon' /></a>  : ''}</p>
                      <p className='memberData__position'>{d.position}</p>
                    </div>
                  </div>
                )
              })
            }
            <p className='membersRole'>Expositores</p>
            {
              data.exhibitors.map((d) => {
                return (
                  <div className='members__info' key={d.id}>
                    <img src={d.image} alt="" className='memberImage' />
                    <div className='memberData'>
                      <p className='memberData__name'>{d.name} {d.linkedinUrl !== '' ? <a href={d.linkedinUrl} target="_blank" rel="noreferrer"><img src={logos.linkedin} alt={`Linkedin ${d.name}`} className='icon' /></a> : ''} {d.twitterUrl !== '' ? <a href={d.twitterUrl} target="_blank" rel="noreferrer"><img src={logos.twitterbg} alt={`Linkedin ${d.name}`} className='icon' /></a>  : ''}</p>
                      <p className='memberData__position'>{d.position}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }


export default ActividadVideo