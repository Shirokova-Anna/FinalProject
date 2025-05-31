import React from 'react'
import DropdownMenu from './DropdownMenu'
import classes from './Head.module.css'
import { Link } from 'react-router-dom'
import logo from '../imgs/logo.png'

function Head() {
  return (
    <div className={classes.head}>
        <div className={classes.cell}><Link to="/" className={classes.main}>На главную</Link></div>
        <div className={classes.cell}><img src={logo} alt="logo" style={{width: '100px'}}/></div>
        <div className={classes.cell}><DropdownMenu /></div>
    </div>
  )
}

export default Head
