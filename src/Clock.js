import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faUndo } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    position: relative;
`;
const TaskName = styled.div`
    text-align: center;
    position: absolute;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1.2px;
    top: -30px;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Tomato = styled.div`
    width: 300px;
    height: 300px;
    background: ${props => (props.status === 'working' ? '#EA5548' : '#B5E254')};
    border-radius: 50%;
    background-image: linear-gradient(to right, transparent 50%, #acacac 0);
    overflow: hidden;
    position: relative;
    margin-bottom: 50px;
    :before {
        content: '';
        display: block;
        margin-left: 50%;
        height: 100%;
        background: ${props => (props.angel > 180 ? '#ACACAC' : props.status === 'working' ? '#EA5548' : '#B5E254')};
        transform-origin: left;
        transform: ${props => (props.angel > 180 ? `rotate(${props.angel - 180}deg)` : `rotate(${props.angel}deg)`)};
    }
`;
const TomatoText = styled.div`
    width: 200px;
    height: 200px;
    background: #fcfcfc;
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
    background: #fcfcfc;
    border-radius: 50%;
    color: #acacac;
    cursor: pointer;
`;

const Clock = props => {
    const [timerId, setTimerId] = useState();
    const [taskNowSec, setTaskNowSec] = useState();
    const [task, setTask] = useState();

    useEffect(() => {
        // console.log('render',)
        if (props) setTaskNowSec(props.task.second);
        setTask(props.task);
    }, [props]);

    useEffect(() => {
        if (taskNowSec === 0) {
            stopCount(timerId);
            if (task.status === 'working') {
                setTaskNowSec(300);
                setTask({ ...task, second: 300, status: 'break' });
                setTimerId(startCount());
            }
        }
    }, [taskNowSec]);

    const startCount = () => {
        return window.setInterval(() => setTaskNowSec(taskNowSec => taskNowSec - 1), 1000);
    };
    const stopCount = timerId => {
        window.clearInterval(timerId);
    };
    const undoCount = timerId => {
        window.clearInterval(timerId);
        setTaskNowSec(task.second);
    };
    const timeFormat = time => {
        let min = parseInt(time / 60);
        let sec = time % 60;
        if (sec < 10) {
            sec = '0' + sec;
        }
        return `${min}:${sec}`;
    };

    return (
        <Container>
            <TaskName>{task && task.name}</TaskName>
            <Tomato
                status={task ? task.status : 'working'}
                angel={task && (360 * (task.second - taskNowSec)) / task.second}
            >
                <TomatoText>{timeFormat(taskNowSec)}</TomatoText>
            </Tomato>
            <Operation>
                <OperationIcon onClick={() => setTimerId(startCount())}>
                    <FontAwesomeIcon icon={faPlay} size="lg" />
                </OperationIcon>
                <OperationIcon onClick={() => stopCount(timerId)}>
                    <FontAwesomeIcon icon={faPause} size="lg" />
                </OperationIcon>
                <OperationIcon onClick={() => undoCount(timerId)}>
                    <FontAwesomeIcon icon={faUndo} size="lg" />
                </OperationIcon>
            </Operation>
        </Container>
    );
};

const isEqual = (prevProps, nextProps) => {
    return prevProps.name === nextProps.name;
};

export default React.memo(Clock, isEqual);
