import React from 'react';
import styles from '../Month/month.module.scss';
import Day from '../Day/Day'
import dayjs from 'dayjs';

type MonthProps = {
    month: dayjs.Dayjs[][];
}


const Month = (props: MonthProps)=>{
    return(
        
        <div className={styles.mainContainer}>

            {props.month.map((row , index)=>{
               return <React.Fragment key={index}>


                    {row.map((day, idx)=>{
                     return <Day 
                     day={day} 
                     Key={idx} 
                     rowIdx={index}
                     />
                    })}
                
                
                </React.Fragment>
            })}

        </div>
        
    )
};

export default Month;
