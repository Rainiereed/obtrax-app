import React from 'react';
import LogoButton from "../components/LogoButton";
import "../pages/RegisteredConfirm.scss";

const RegisteredConfirm = () => {
    return (
       <div>
           <div>
           <LogoButton />
           </div>

           <div className="confirmCard" 
                style={{
                    overlay: {
                      backgroundColor: 'grey'
                    },
                  }}
            >
               <h1>Symptom registrerade</h1>
               <p>Dina symptom är nu registrerade. Fortsätt att mäta dina värkar och ring din barnmorska om du är osäker.</p>
               <br></br>
               <br></br>
               <button className="buttonRegistered">Jag förstår</button>
           </div>
       </div>

    );


}

export default RegisteredConfirm;