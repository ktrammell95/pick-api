import React from 'react'
import loadingImg from '../images/Pacman.gif'

export const Loading = () => (
  <section className="section">
    <div className="container">
      <div className="level">
        <div className="level-item">
          <img src={loadingImg} alt="Loading Img" width="150" />
        </div>
      </div>
    </div>
  </section>
)
