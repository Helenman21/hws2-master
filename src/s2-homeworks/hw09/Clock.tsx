import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined | NodeJS.Timer>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        let timerId = setInterval(() => setDate(new Date()), 1000);
        setTimerId(timerId)
    }

    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        clearInterval(timerId)
        setTimerId(undefined)
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
            setShow(true)
    }
    const onMouseLeave =() => { // пишут студенты // спрятать дату если мышка не наведена
            setShow(false)
    }
    const dateTranslation = (num: number):number|string => num < 10 ? '0'+ num : num
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    const formatter = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    const stringTime =( formatter.format(date) ) || <br/>
    const stringDate = `${dateTranslation(date.getDate())}.${dateTranslation(date.getMonth() + 1)}.${date.getFullYear()}` || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    //const stringDay = `${days[date.getDay()-1]}` || <br/> // пишут студенты
    const stringDay = new Intl.DateTimeFormat('en-US', {
        weekday: 'long'
    }).format(date) || <br/>;
    const stringMonth = month[date.getMonth()] || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={timerId? true : false} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                    xType={'default'}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    xType={'default'}
                    disabled={timerId? false :true} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}

                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
