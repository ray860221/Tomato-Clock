import React, { useState,useEffect } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faUndo } from '@fortawesome/free-solid-svg-icons'

const TaskName = styled.div`
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1.2px;
    margin-top: 100px;
    margin-bottom: 72px;
`;

const Tomato = styled.div`
    width: 300px;
    height: 300px;
    background: #EA5548;
    border-radius: 50%;
    background-image: linear-gradient(to right, transparent 50%, #ACACAC 0);
    overflow: hidden;
    position: relative;
    margin-bottom: 50px;
    :before{
        content: '';
        display: block;
        margin-left: 50%;
        height: 100%;
        background: ${props=>props.angel>180?'#ACACAC':'#EA5548'};
        transform-origin: left;
        transform: ${props=>props.angel>180?`rotate(${props.angel-180}deg)`:`rotate(${props.angel}deg)`};
    }
`;
const TomatoText = styled.div`
    width: 200px;
    height: 200px;
    background: #FCFCFC;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 4px;
`;
const Operation = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
`;
const OperationIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: #FCFCFC;
    border-radius: 50%;
    color: #ACACAC;
    cursor: pointer;
`;

const Clock = (props) => {

    const [timerId, setTimerId] = useState();
    const [taskNowSec, setTaskNowSec] = useState();

    useEffect(()=>{
        if (props)
            setTaskNowSec(props.task.second);
    }, [props]);

    const startCount = () => {
        return window.setInterval(( () => setTaskNowSec(taskNowSec => taskNowSec-1) ), 1000);
    };
    const stopCount = (timerId) => {
        window.clearInterval(timerId);
    };
    const undoCount = (timerId) => {
        window.clearInterval(timerId);
        setTaskNowSec(props.task.second);
    };
    const timeFormat = (time) => {
        let min = parseInt(time / 60);
        let sec = time % 60;
        if (sec < 10) {
            sec = '0' + sec;
        };
        return `${min}:${sec}`;
    };

    return (
        <>
            <TaskName>{props.task.name}</TaskName>
            <Tomato angel={360*(props.task.second - taskNowSec)/props.task.second}>
                <TomatoText>
                    {timeFormat(taskNowSec)}
                </TomatoText>
            </Tomato>
            <Operation>
                <OperationIcon onClick={()=>setTimerId(startCount())}>
					<FontAwesomeIcon icon={faPlay} size="lg"/>
				</OperationIcon>
                <OperationIcon onClick={()=>stopCount(timerId)}>
					<FontAwesomeIcon icon={faPause} size="lg"/>
				</OperationIcon>
                <OperationIcon onClick={()=>undoCount(timerId)}>
					<FontAwesomeIcon icon={faUndo} size="lg"/>
				</OperationIcon>
            </Operation>
        </>
    );
}

export default Clock;
