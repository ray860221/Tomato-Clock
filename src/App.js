import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';
import InitialClock from './InitialClock';
import AddTask from './AddTask';
import MusicList from './MusicList';
import Clock from './Clock';
import TomatoIcon from './TomatoIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMusic, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Wrap = styled.div`
    display: flex;
    height: 100%;
    color: #333333;
    font-family: sans-serif;
`;
const MainBlock = styled.div`
    display: flex;
    width: ${props => (props.barExpand ? '50%' : '100%')};
    background: #eaeaea;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: width 0.5s ease-in-out;
`;
const MainFooter = styled.div`
    position: fixed;
    bottom: 50px;
    font-size: 10px;
    letter-spacing: 1.5px;
`;

const NavBlock = styled.div`
    display: flex;
    flex: ${props => (props.barExpand ? '0 0 50%' : '0 0 80px')};
    background: #333333;
    transition: flex 0.5s ease-in-out;
    min-width: 0; // resolve conflict with white-space and flexbox
`;

const NavBar = styled.div`
    flex: 0 0 80px;
    border-right: ${props => (props.barExpand ? '2px solid #414141' : '')};
    position: relative;
    transition: border-right 0.5s ease-in-out;
`;
const NavIcon = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: ${props => (props.active ? '#EA5548' : '#FCFCFC')};
    cursor: pointer;
    &:hover {
        color: #ea5548;
    }
`;

const NavContent = styled.div`
    flex-grow: 1;
    min-width: 0; // resolve conflict with white-space and flexbox
    padding: 0 34px;
`;

const SlideBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    width: 90px;
    height: 50px;
    background: #fcfcfc;
    border-radius: 25px 5px 5px 25px;
    bottom: 14px;
    left: -24px;
    cursor: pointer;
`;
const SlideIcon = styled.div`
    transform: ${props => (props.barExpand ? 'rotate(0deg)' : 'rotate(-180deg)')};
    // transition: transform .5s ease-in-out;
`;

const App = () => {
    const [nav, setNav] = useState('add');
    const [task, setTask] = useState({});
    const [barExpand, setBarExpand] = useState(1);
    const [barExpandTrans, setBarExpandTrans] = useState(1);
    const [musicList, setMusicList] = useState([]);
    const [nowPlaying, setNowPlaying] = useState();

    useEffect(() => {
        let local_music = localStorage.getItem('musicList');
        if (local_music) setMusicList(JSON.parse(local_music));
    }, []);

    useEffect(() => {
        if (musicList.length !== 0) localStorage.setItem('musicList', JSON.stringify(musicList));
    }, [musicList]);

    return (
        <Wrap>
            <MainBlock barExpand={barExpand}>
                {Object.keys(task).length === 0 ? <InitialClock /> : <Clock task={task} />}
                <MainFooter>PODOMORO</MainFooter>
            </MainBlock>
            <NavBlock
                barExpand={barExpand}
                onTransitionEnd={e => {
                    if (barExpand) {
                        setBarExpandTrans(1);
                    }
                }}
            >
                <NavBar barExpand={barExpand}>
                    <NavIcon onClick={() => setNav('add')} active={nav === 'add'}>
                        <FontAwesomeIcon icon={faPlusCircle} size="lg" />
                    </NavIcon>
                    <NavIcon onClick={() => setNav('music')} active={nav === 'music'}>
                        <FontAwesomeIcon icon={faMusic} size="lg" />
                    </NavIcon>
                    <SlideBtn
                        onClick={() => {
                            if (barExpand) {
                                setBarExpand(!barExpand);
                                setBarExpandTrans(0);
                            } else setBarExpand(!barExpand);
                        }}
                    >
                        <TomatoIcon size="m" />
                        <SlideIcon barExpand={barExpand}>
                            <FontAwesomeIcon icon={faArrowRight} size="lg" />
                        </SlideIcon>
                    </SlideBtn>
                </NavBar>
                {barExpandTrans ? (
                    <NavContent>
                        {nav === 'add' ? (
                            <AddTask task={task} setTask={setTask} />
                        ) : (
                            <MusicList
                                musicList={musicList}
                                setMusicList={setMusicList}
                                nowPlaying={nowPlaying}
                                setNowPlaying={setNowPlaying}
                            />
                        )}
                    </NavContent>
                ) : (
                    <></>
                )}
            </NavBlock>
            <ReactPlayer
                width="0px"
                height="0px"
                url={musicList[nowPlaying] && musicList[nowPlaying].url}
                playing={true}
                volume={0.2}
                onEnded={() => setNowPlaying(pre => pre + 1)}
            />
        </Wrap>
    );
};

export default App;
