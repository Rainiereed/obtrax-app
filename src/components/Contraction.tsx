import React, { useState, useEffect } from 'react';
import './styles/Contraction.scss';
import { Store, IContraction } from '../Store'; 
import stopwatch from '..assets/stopwatch.svg';

const Contraction: React.FC = () => {
  const {state, dispatch} = React.useContext(Store);

  const reset = () => {
    if(window.confirm("Are you sure you want to reset?")){
      dispatch({type: 'RESET_CONTRACTIONS'});
      dispatch({type: 'RESET_MIDCONTRACTION'});
    }
  }

  let recentDiff = state.contractions.length > 1 ?  dateDiffInSeconds(state.contractions[0].start, state.contractions[1].end!) : 0;


  return (
    <div className="App">
      <main>
        {
          state.midContraction ?
          <button className="contraction end" onClick={() => {dispatch({type: 'CONTRACTION_END', payload: new Date()}); dispatch({type: 'TOGGLE_CONTRACTION'})} }>stop</button>
          :
          <button className="contraction" onClick={() => {dispatch({type: 'CONTRACTION_START', payload: new Date()}); dispatch({type: 'TOGGLE_CONTRACTION'})} }>start</button>
        }
        <div className="summary">
          {state.contractions.length > 0 ? <TimeSinceLastContraction latestContraction={state.contractions[0]} recentDiff={recentDiff}></TimeSinceLastContraction> : null}
          { state.contractions.length > 1 ? <Summary contractions={state.contractions.slice(0, 3)} recentDiff={recentDiff}></Summary> : null}
        </div>

      <table>
        <thead>
          <tr>
            <th>Start</th>
            <th>Stop</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {state.contractions.map(
            contraction => {
              return <ContractionListItem key={contraction.id} contraction={contraction}></ContractionListItem>
            }
          )}
        </tbody>
        </table>
        {
          state.contractions.length > 0 ? <button className="reset" onClick={() => reset()}>Reset</button> : null
        }
        
      </main>
    </div>
  );
}

const ContractionListItem: React.FunctionComponent<{contraction: IContraction}> = ({contraction}) => {
  
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let timer: any;
      if(contraction.end === undefined){
        setDuration(dateDiffInSeconds(new Date(), contraction.start));
        timer = setInterval(
          () => {
            setDuration(dateDiffInSeconds(new Date(), contraction.start));
          }, 1000
        )
      } else {
        setDuration(dateDiffInSeconds(contraction.end, contraction.start));
      }

      return(() => {
        clearInterval(timer);
      })

    }, [contraction]);

  return (
    <tr>
      <td>
        <Time date={contraction.start}></Time>
      </td>
      {
        contraction.end !== undefined ? <td><Time date={contraction.end}></Time></td> : <td></td>
      }
      <td>
        <span className="timer">
          {
            contraction.end === undefined ? <img alt="watch" className="stopwatch-icon" src={stopwatch} /> : null
          }
            { formatDuration(duration) }
        </span>
        
      </td> 
    </tr>)
}

const Summary: React.FunctionComponent<{contractions: IContraction[]; recentDiff: number}> = ({contractions, recentDiff}) => {

  const latestContraction = contractions[0];

  const recentDiffDisplay = <div className="recent-diff"><label>Time between last 2 contractions</label> {formatDuration(recentDiff)}</div>
      
  if(contractions.length === 3){
    let startDate = latestContraction.end === undefined ? latestContraction.start : latestContraction.end;
    const allDiff = dateDiffInSeconds(startDate, contractions[2].start);
    return <>{recentDiffDisplay}<div className={allDiff < 10*60*1000 ? 'all-diff alert' : 'all-diff'}><label>Time for last 3 contractions</label> {formatDuration(allDiff)}</div></>
  } else {
    return recentDiffDisplay;
  }
}

const TimeSinceLastContraction: React.FunctionComponent<{latestContraction: IContraction, recentDiff: number}> = ({latestContraction, recentDiff}) => {
  const [duration, setDuration] = useState(0);
  
  useEffect(() => {
    let timer: any;

    if(latestContraction.end !== undefined){
      setDuration(dateDiffInSeconds(new Date(), latestContraction.end!));
      timer = setInterval(() => {
        setDuration(dateDiffInSeconds(new Date(), latestContraction.end!));
      }, 1000)
    } else {
      setDuration(0);
    }

    return(() => clearInterval(timer))

    
  }, [duration, latestContraction])

  if(latestContraction.end === undefined){
    return null;
  } else {
    return(
      <div className={duration.valueOf() > recentDiff ? 'timer alert' : 'timer'}>
        <label>Time since last Contraction</label>
        <span className="timer">
          <img alt="" className="stopwatch-icon" src={stopwatch} />
          {formatDuration(duration)}
        </span>

        </div>
    )
  }


}

function padWithLeadingZero(value: Number): String{
return value < 10 ? `0${value.toFixed(0)}`: value.toFixed(0);
}

function formatDuration(totalSeconds: number){
  let date = new Date(totalSeconds);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let hoursOutput = hours > 0 ? `${padWithLeadingZero(hours)}:` : ''; 

  // if(seconds === 60){
  //   seconds = 0;
  //   minutes ++;
  // }
  
  return `${hoursOutput}${padWithLeadingZero(minutes)}:${padWithLeadingZero(seconds)}`;
}

function dateDiffInSeconds(startDate: Date, endDate: Date): number{
  return startDate.valueOf() - endDate.valueOf();
}

const Time: React.FunctionComponent<{date: Date}> = ({date}) => {
  let hours = date.getHours();
  let twelveHour = hours > 12 ? hours - 12 : hours;

  return(
    <>{padWithLeadingZero(twelveHour)}:{padWithLeadingZero(date.getMinutes())} <span className="date-meridiem">{hours > 12 ? 'PM' : 'AM'}</span></>
  )
}

export default Contraction;
