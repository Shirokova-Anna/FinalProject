import React from 'react'
import classes from './Foot.module.css'
import { Link } from 'react-router-dom'
import TG from '../imgs/TG.png'
import YT from '../imgs/YT.png'
import INST from '../imgs/INST.png'

function Foot() {
  return (
    <div className={classes.footer}>
      <div className={classes.footerGrid}>
        <div className={classes.cell}><Link to="/" className={classes.main}>На главную</Link></div>
        <div className={`${classes.cell} ${classes.icons}`}>

          <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">
            <img src={TG} alt="Telegram" className={classes.icon} />
          </a>

          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src={YT} alt="YouTube" className={classes.icon} />
          </a>

          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={INST} alt="Instagram" className={classes.icon} />
          </a>

        </div>
        <div className={classes.cell}><Link className={classes.main} to="/reg">Регистрация</Link></div>
      </div>
      <p className={classes.rights}>Все права защищены</p>
    </div>
  )
}

export default Foot
