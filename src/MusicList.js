import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #fcfcfc;
    border-bottom: 1px solid #414141;
    padding: 30px 0;
    margin-bottom: 20px;
`;
const Content = styled.div`
    font-size: 14px;
    color: #acacac;
    letter-spacing: 0.7px;
`;
const AddMusicName = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
`;
const AddMusicInput = styled.input`
    font-family: sans-serif;
    padding: 16px;
    outline: none;
    border: 0px;
    font-size: 16px;
    background: #fcfcfc;
    border-radius: 5px;
    margin-top: 10px;
`;
const AddMusicIBtn = styled.div`
    color: #fcfcfc;
    background: #ea5548;
    border-radius: 30px;
    text-align: center;
    padding: 18px 0;
    cursor: pointer;
`;
const Divider = styled.div`
    height: 1px;
    background: #414141;
    margin: 20px 0px;
`;
const MusicContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 20px;
    color: #fcfcfc;
    letter-spacing: 0.8px;
    border-radius: 2px;
    margin-bottom: 1px;
    cursor: pointer;
    &:hover {
        background: #414141;
    }
`;
const scale = keyframes`
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.3, 1.3);
  }
  100% {
    transform: scale(1, 1);
  }
`;
const PlayIcon = styled.div`
    margin-right: 8px;
    animation: ${scale} 3s ease-in-out infinite;
`;
const MusicIndex = styled.div`
    font-size: 16px;
    margin-right: 6px;
    margin-left: 2px;
`;
const MusicTitle = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const MusicList = ({ musicList, setMusicList, nowPlaying, setNowPlaying }) => {
    const [url, setUrl] = useState('');

    return (
        <>
            <Title>MUSIC LISTS</Title>
            <Content>
                <AddMusicName>
                    ADD MUSIC
                    <AddMusicInput value={url} onChange={e => setUrl(e.target.value)} />
                </AddMusicName>
                <AddMusicIBtn
                    onClick={() => {
                        fetch('https://noembed.com/embed?url=' + url)
                            .then(res => res.json())
                            .then(data => setMusicList([...musicList, { url: url, title: data.title }]))
                            .catch(err => console.log(err));
                        setUrl('');
                    }}
                >
                    ADD
                </AddMusicIBtn>
                <Divider />
                <AddMusicName>MUSIC LISTS</AddMusicName>
                {musicList.map((music, index) => (
                    <MusicContainer key={music.url} onClick={() => setNowPlaying(index)}>
                        <div>
                            {index === nowPlaying ? (
                                <PlayIcon>
                                    <FontAwesomeIcon icon={faPlayCircle} size="1x" />
                                </PlayIcon>
                            ) : (
                                <MusicIndex>{index + 1 + '.'}</MusicIndex>
                            )}
                        </div>
                        <MusicTitle>{music.title}</MusicTitle>
                    </MusicContainer>
                ))}
            </Content>
        </>
    );
};

export default MusicList;
