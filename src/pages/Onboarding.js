import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../pages/Onboarding.scss";
import LogoButton from "../components/LogoButton"
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';

const properties = {
  duration: 10000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,

}

const Onboarding = () => {
  return (
    <div>
      <LogoButton />
      <div className="slide-container">

        <Slide {...properties}>
          <div className="each-slide">

            <h1>Välkommen</h1>
            <h3>Låt oss presentera OB Trax - din bästa digitala vän för er, dig och ditt barn! Vi håller koll på hur ni mår och att allt står rätt till.</h3>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src={icon1} alt="icon1" />
          </div>
          <div className="each-slide">

            <h1>Bättre koll på er</h1>
            <h3>OB Trax analyserar dina värkar och uppdaterar sjukhuset för att du ska känna dig trygg oavsett i vilken vecka du och ditt barn befinner er.</h3>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src={icon2} alt="icon2" />
          </div>
          <div className="each-slide">

            <h1>Värdefull information</h1>
            <h3>Klicka på <strong>Lägg till info</strong> för att ge OB Trax värdefull information som tillgängliggör hjälp till er bäst på bästa sätt!<br>
            </br>
              <br></br>
              Om du direkt vill komma igång att mäta dina värkar, kan du lägga till denna information i dian värkar, kan du lägga till denna information i dina inställningar senare.</h3>
            <img src={icon3} alt="icon3" />
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Onboarding;