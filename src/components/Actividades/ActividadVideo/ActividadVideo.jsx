import React from 'react'
import "./ActividadVideo.scss"

const ActividadVideo = ({ data }) => {
      return (
        <div className='actividadVideo'>
          <div>
            <iframe width="600" height="410" src="https://www.youtube.com/embed/RkS_jXVQP1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
          </div>
          <div className='actividadVideo__members'>
            <p className='membersTitle'>¿Quiénes lo conforman?</p>
            <p className='membersRole'>Moderador</p>
            {
              data.moderators.map((d) => {
                return (
                  <div className='members__info'>
                    <img src={d.image} alt="" className='memberImage' />
                    <div className='memberData'>
                      <p className='memberData__name'>{d.name}</p>
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
                  <div className='members__info'>
                    <img src={d.image} alt="" className='memberImage' />
                    <div className='memberData'>
                      <p className='memberData__name'>{d.name}</p>
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