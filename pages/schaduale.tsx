import React,{useState} from 'react';
import styles from '../styles/Schaduale.module.scss';
import SideBar from '../components/Calendar/SideBar/sidebar';
import Month from '../components/Calendar/Month/month';
import CalendarHeader from '../components/Calendar/CalendarHeader/calendarheader';
import { callendarUtils } from '../components/Calendar/utils';


const Schaduale = ()=>{
    const [currentMonth, setCurrentMonth] = useState(callendarUtils.getMonth());
    
    return(
        <>
        <div className={styles.mainContainer}>
            <CalendarHeader/>
        <div className={styles.childrenContainer}>
            <SideBar/>
            <Month
            month = {currentMonth}
            />
        </div>

        </div>
        </>
    )
    
};

export default Schaduale;
