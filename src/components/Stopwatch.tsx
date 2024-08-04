import React from 'react';
import { useStopwatch } from 'react-timer-hook';

export const Stopwatch = () => {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false });

    return (
        <div style={{textAlign: 'center'}}>
            <h1>ストップウォッチ</h1>
            <div style={{fontSize: '100px'}} className='m-16'>
                <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <p>{isRunning ? '計測中...' : '一時停止中'}</p>
            <button onClick={start}>スタート</button>
            <button onClick={pause}>一時停止</button>
            {/* <button onClick={reset}>リセット</button> */}
        </div>
    );
}
