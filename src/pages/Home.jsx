import React from 'react'
import classes from './Home.module.css'
import { Link } from 'react-router-dom'
import road from '../imgs/RoadBike.jpg'
import MTB from '../imgs/MTB.JPG'
import Fix from '../imgs/Fix.jpg'

function Home() {
  return (
    <div className={classes.main}>
      <h1>
      Добро пожаловать на сайт — гид по типам велосипедов
      </h1>
      <p>
      В мире велосипедов легко запутаться: шоссейники, фиксы, горные, гибриды, гравийники… Каждый из них создан для своей цели, своего ритма и своего стиля езды. Этот сайт поможет тебе разобраться, какой велосипед подойдёт именно тебе.
      </p>
      <p>Здесь ты найдёшь подробные описания самых популярных типов байков — от стремительных шоссейных до надёжных горных, от минималистичных фикс-байков до универсальных городских моделей.
      </p>
      <h2>Что ты найдёшь на сайте:</h2>
      <ul>
        <li>
          <h3>Обзоры и характеристики</h3>
          <p>Подробно разбираем каждый тип велосипеда — как он устроен, для чего предназначен, какие есть плюсы и минусы.</p>
        </li>
        <li>
          <h3>Советы по выбору</h3>
          <p>Помогаем определиться с велосипедом в зависимости от целей, уровня подготовки и стиля жизни.</p>
        </li>
        <li>
          <h3>Отзывы реальных владельцев</h3>
          <p>На каждый тип велосипеда можно отправить отзыв, в котором люди, имеющие опыт владения определённым типом велосипеда смогут поделиться своим опытом.</p>
        </li>
      </ul>
      <h1>Готов выбрать свой идеальный байк?</h1>
      <p>Начни с изучения одного из разделов — и катай с удовольствием!</p>

        <div className={classes.cards}>

            <Link to="/road" className={classes.link}> <img className={classes.card} src={road} alt="roadBike" />
            <h3 className={classes.link}>Шоссейный</h3>
            </Link>
            <Link to="/MTB" className={classes.link}> <img className={classes.card} src={MTB} alt="" />
            <h3 className={classes.link}>MTB</h3>
            </Link>
            <Link to="/Fix" className={classes.link}> <img className={classes.card} src={Fix} alt="" />
            <h3 className={classes.link}>Fix</h3>
            </Link>

        </div>
      
    </div>
  )
}

export default Home
