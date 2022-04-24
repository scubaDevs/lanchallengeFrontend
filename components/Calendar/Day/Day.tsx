import dayjs from 'dayjs'
import React from 'react'
import styles from '../Day/Day.module.scss';

type Dayprops ={
    day:dayjs.Dayjs;
    Key: number;
    rowIdx: number;
}

export default function Day(props:Dayprops) {
    const getCurrentDayClass = ()=>{
        return props.day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? styles.todayContainer : styles.paragraphtwocontainer;
    }
  return (
      <div className= {styles.mainContainer} key={props.Key}>
          <header className='styles.headercontainer'>
        {props.rowIdx ===0 && (
              <p className={styles.paragraphonecontainer} >{props.day.format('ddd').toUpperCase()}</p>
              )} 
        
          <p className={getCurrentDayClass() } >{props.day.format('DD')}</p>

          </header>
      </div>
    
  )
}
