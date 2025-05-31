import classes from './App.module.css';
import Head from './components/Head';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Foot from './components/Foot'
import imgRoad from './imgs/RoadBike.jpg'
import Bike from './pages/Bike'
import imgMTB from './imgs/MTB.JPG'
import RoadDescr from './components/RoadDescr';
import MTBDescr from './components/MTBDescr';
import imgFix from './imgs/Fix.jpg'
import FixDescr from './components/FixDescr';
import Reg from './pages/Reg';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.fonCase}>
        <div className={classes.fon} />
      </div>
      <div className={classes.AppCase}>
        <div className={classes.App}>
          <Head />


          <div className={classes.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/road" element={<Bike
                image={imgRoad}
                name='Шоссейный велосипед'
                description={<RoadDescr />}
              />}
              />
              <Route path='/MTB' element={<Bike
                image={imgMTB}
                name='Горный велосипед (MTB, от Mountain Bike)'
                description={<MTBDescr />}
              />} />
              <Route path='/Fix' element={<Bike
              image={imgFix}
              name='Фикс (Fixed Gear Bike)'
              description={<FixDescr/>}
                />} />
                <Route path='/reg' element={<Reg />} />
            </Routes>
          </div>
          <Foot />
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
