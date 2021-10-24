import React,{useState} from 'react'
import styled from 'styled-components'
import TomatoIcon from './TomatoIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #FCFCFC;
    border-bottom: 1px solid #414141;
    padding: 30px 0;
    margin-bottom: 20px;
`;
const Content = styled.div`
    font-size: 14px;
    letter-spacing: 0.7px;
`;
const Nav = styled.div`
    display: flex;
`;
const NavBtn = styled.div`
    padding: 4px 22px;
    margin-right: 4px;
    background: ${props=>props.active?'#EA5548':'#606060'};
    color: ${props=>props.active?'#FCFCFC':'#ACACAC'};
    border-radius: 8px 8px 0px 0px;
    cursor: pointer;
    font-weight: bold;
`;
const ListContainer = styled.div``;
const List = styled.div`
    display: flex;
    align-items: center;
    background: #414141;
    padding: 10px 0;
    position: relative;
    margin-bottom: 1px;
`;
const ListContent = styled.div``;
const ListName = styled.div`
    font-size: 16px;
    line-height: 20px;
    color: #FCFCFC;
    margin-bottom: 4px;
`;

const Circle = styled.div`
    width: 8px;
    height: 8px;
    background: #EA5548;
    border-radius: 50%;
    display: inline-block;
    margin-right: 6px;
`;
const IconContainer = styled.div`
    padding: 0 12px;
`;
const ExpandContainer = styled(IconContainer)`
    position: absolute;
    right: 0;
    cursor: pointer;
`;

const TaskList = (props) => {

    const [nav, setNav] = useState('todo');

    const TimeCircle = (props) => {
        return Array(props.tomatos).fill(0).map((_, k)=><Circle key={k}/>)
    }

  	return (
        <>
            <Title>
                TASK LISTS
            </Title>
            <Content>
                <Nav>
                    <NavBtn onClick={()=> setNav('todo')} active={nav==='todo'}>TODO</NavBtn>
                    <NavBtn onClick={()=> setNav('done')} active={nav==='done'}>DONE</NavBtn>
                </Nav>
                {/* {props.task.map((item, key)=><div>{item.name}</div>)} */}
                <ListContainer>
                    {props.task.map((item, key)=>
                        <List key={key}>
                            <IconContainer><TomatoIcon size="s"/></IconContainer>
                            <ListContent>
                                <ListName>{item.name}</ListName>
                                <TimeCircle tomatos={item.tomatos}/>
                            </ListContent>
                            <ExpandContainer><FontAwesomeIcon icon={faArrowDown} size="lg" color="#ACACAC"/></ExpandContainer>
                        </List>
                    )}
                    
                </ListContainer>
            </Content>
		</>
	);
}

export default TaskList;
