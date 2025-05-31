import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './DropdownMenu.module.css';

function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.cap}>
      <button onClick={() => setOpen(!open)} className={classes.btn}>
        Тип велосипеда <br />▾
      </button>

      {open && (
        <ul className={classes.menu}
        >
          <li><Link className={classes.link} to="/road" onClick={() => setOpen(false)}>Шоссейный</Link></li>
          <li><Link className={classes.link} to="/MTB" onClick={() => setOpen(false)}>MTB</Link></li>
          <li><Link className={classes.link} to="/Fix" onClick={() => setOpen(false)}>Fix</Link></li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;