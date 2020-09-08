import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Sidenav from "../components/Sidenav";
import LogoButton from "../components/LogoButton";
import CallMidwifeButton from "../components/CallMidwifeButton"
import "../pages/Information.scss";

const Information = () => {
    return (
        <div>
            <Sidenav />
            <LogoButton />
            <h1>Viktig information</h1>
            <div className="grid-container">
                <div>
                    <AnchorLink href='#days'><button className="linkbutton" id="Item1" >Veta när det är dags</button>
                    </AnchorLink>
                </div>
                <div>
                    <AnchorLink href='#pain'>
                        <button className="linkbutton" id="Item2" >Värkar</button>
                    </AnchorLink>
                </div>
                <div>
                    <AnchorLink href='#water'>
                        <button className="linkbutton" id="Item3" >Om vattnet går…</button>
                    </AnchorLink>
                </div>
                <div>
                    <AnchorLink href='#call'>
                        <button className="linkbutton" id="Item4" >När ska man ringa?</button>
                    </AnchorLink>
                </div>
            </div>
            <p>Har du symptom? <br></br>
            Du kan registrera dina symptom direkt i OB Trax. </p>
            <div>
                <button className="buttonMenu" id="gridItem2">Jag vill registrera sympton</button>
            </div>
            <section id='days'>
                <p className="bold">Veta när det är dags</p>
                <p>Det är inte alltid så lätt att veta när det är dags att åka in till förlossningen. En förlossning kan starta på olika sätt. Du är alltid välkommen att ringa och tala med en barnmorska för att få stöd och råd. Tillsammans gör vi upp en bra plan.</p>
            </section>
            <section id='pain'>
                <p className="bold">Värkar</p>
                <p>Till en början är värkarna oftast svaga. De kan
                upplevas som mensvärk med pauser upp till 30
                minuter. Ibland kan det kännas så upp till ett dygn.
                Lev då som vanligt, försök att sova på natten och
                vara aktiv på dagen. Ring till förlossningen när
                värkarna tilltagit i styrka och längd.  När de varar
                mellan 60 och 90 sekunder i 3-4 minuters intervall
                eller om du känner behov av stöd och hjälp är det
            lämpligt att höra av sig till förlossningsavdelningen. </p>
            </section>
            <section id='water'>
                <p className="bold">Om vattnet går…</p>
                <p>Vid vattenavgång utan värkar, oavsett tidpunkt på
                dygnet, ringer du till förlossningen för att få råd
                om  vad som bör göras. Om klart fostervatten
                avgår under ett aktivt värkarbete kan du om du vill
                fortsätta att vara hemma. Vid missfärgat
            fostervatten ska du alltid ringa till förlossningen.</p>
            </section>
            <p className="bold">Slemproppen</p>
            <p>Slemproppen sitter i livmodertappen och är ett
            skydd mot infektioner under graviditeten. Den kan
            lossna i slutet av graviditeten eller under
            värkarbetet när livmoderhalsen blir kortare. Om
            den avgår betyder det inte att förlossningen startat men att livmodern förbereder sig. Vänta med att ringa till barnmorskan tills du får värkar om du inte är oroad av något annat. </p>
            <p className="bold">Initialblödning</p>
            <p>Det är helt normalt med en liten slemtillblandad blödning när du har fått värkar. Blödningen beror på att små blodkärl i livmodertappen brister och är tecken på att livmodertappen har börjat utplånas och öppna sig. Du ska alltid ringa till förlossningen vid blödning utan värkar.  </p>
            <section id='call'>
                <p className="bold">När ska man ringa?</p>
                <p>Tag kontakt med förlossningsavdelningen när:</p>
                <ul>
                    <li>värkarna tilltar i styrka och längd</li>
                    <li>kommer med 3-4 minuters intervall och
                    håller i sig mellan 60-90 sekunder
                </li>
                    <li>fostervattnet avgår men inga värkar
                    känns
                </li>
                    <li>du får en blödning utan att ha värkar</li>
                    <li>du känner behov av stöd och hjälp.</li>
                </ul>
            </section>
            <br></br>
            <p>Du är alltid välkommen att ringa till förlossningen för rådgivning av en barnmorska.</p>
            <CallMidwifeButton path="/ring" text="Ring barnmorska" />
            <br></br>
            <br></br>
        </div>

    );
}

export default Information;