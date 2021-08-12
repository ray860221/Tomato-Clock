import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import InitialClock from './InitialClock'
import AddTask from './AddTask'
import Clock from './Clock'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faBars, faChartBar, faMusic } from '@fortawesome/free-solid-svg-icons'

const Wrap = styled.div`
  	display: flex;
  	height: 100%;
  	color: #333333;
	font-family: sans-serif;
`;
const MainBlock = styled.div`
  	display: flex;
  	width: 50%;
  	background: #EAEAEA;
  	flex-direction: column;
  	align-items: center;
`;
const MainFooter = styled.div`
  	position: fixed;
  	bottom: 50px;
  	font-size: 10px;
  	letter-spacing: 1.5px;
`;

const NavBlock = styled.div`
  	display: flex;
  	width: 50%;
  	background: #333333;
`;

const NavBar = styled.div`
  	width: 80px;
  	border-right: 2px solid #414141;
`;
const NavIcon = styled.div`
	height: 80px;
    display: flex;
    align-items: center;
	justify-content: center;
	font-size: 20px;
	color: ${props=> props.active?'#EA5548':'#FCFCFC'};
	cursor: pointer;
	&:hover{
		color: #EA5548;
	}
`;

const NavContent = styled.div`
	flex-grow: 1;
	padding: 0 34px;
`;
const App = () => {

	const [nav, setNav] = useState('add');
	const [task, setTask] = useState([]);

	useEffect(()=>{
		console.log(task)
	}, [task])

  	return (
    	<Wrap>
    		<MainBlock>
				{task.length === 0?<InitialClock />:<Clock task={task[0]}/>}
    	    	<MainFooter>
    	    		PODOMORO
    	    	</MainFooter>
    		</MainBlock>
    		<NavBlock>
    	    	<NavBar>
					<NavIcon onClick={() => setNav('add')} active={nav === 'add'}>
						<FontAwesomeIcon icon={faPlusCircle} size="lg"/>
					</NavIcon>
					<NavIcon onClick={() => setNav('task')} active={nav === 'task'}>
						<FontAwesomeIcon icon={faBars} size="lg"/>
					</NavIcon>
					<NavIcon onClick={() => setNav('chart')} active={nav === 'chart'}>
						<FontAwesomeIcon icon={faChartBar} size="lg"/>
					</NavIcon>
					<NavIcon onClick={() => setNav('music')} active={nav === 'music'}>
						<FontAwesomeIcon icon={faMusic} size="lg"/>
					</NavIcon>
    	    	</NavBar>
    	    	<NavContent>
					<AddTask task={task} setTask={setTask}/>
    	    	</NavContent>
    	  	</NavBlock>
		</Wrap>
	);
}

export default App;
