import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import InitialClock from './InitialClock'
import AddTask from './AddTask'
import TaskList from './TaskList'
import Clock from './Clock'
import TomatoIcon from './TomatoIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faBars, faChartBar, faMusic, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Wrap = styled.div`
  	display: flex;
  	height: 100%;
  	color: #333333;
	font-family: sans-serif;
`;
const MainBlock = styled.div`
  	display: flex;
  	width: ${props=> props.barExpand?'50%':'100%'};
  	background: #EAEAEA;
  	flex-direction: column;
	align-items: center;
	justify-content: center;  
	transition: width 1s ease-in-out;
`;
const MainFooter = styled.div`
  	position: fixed;
  	bottom: 50px;
  	font-size: 10px;
  	letter-spacing: 1.5px;
`;

const NavBlock = styled.div`
  	display: flex;
  	width: ${props=> props.barExpand?'50%':'80px'};
  	background: #333333;
	transition: width 1s ease-in-out;
`;

const NavBar = styled.div`
  	width: 80px;
  	border-right: 2px solid #414141;
	position: relative;
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

const SlideBtn = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	position: absolute;
	width: 90px;
	height: 50px;
	background: #FCFCFC;
	border-radius: 25px 5px 5px 25px;
	bottom: 14px;
    left: -24px;
	cursor: pointer; 
`;

const App = () => {

	const [nav, setNav] = useState('add');
	const [task, setTask] = useState({});
	const [barExpand, setBarExpand] = useState(1);
	const [barExpandTrans, setBarExpandTrans] = useState(1);



	useEffect(()=>{
		console.log(task)
	}, [task])

  	return (
    	<Wrap>
    		<MainBlock barExpand={barExpand}>
				{Object.keys(task).length === 0?<InitialClock />:<Clock task={task}/>}
    	    	<MainFooter>
    	    		PODOMORO
    	    	</MainFooter>
    		</MainBlock>
    		<NavBlock barExpand={barExpand} onTransitionEnd={() => {
				if(barExpand){
					setBarExpandTrans(1)
				}
			}}>
    	    	<NavBar>
					<NavIcon onClick={() => setNav('add')} active={nav === 'add'}>
						<FontAwesomeIcon icon={faPlusCircle} size="lg"/>
					</NavIcon>
					{/* <NavIcon onClick={() => setNav('task')} active={nav === 'task'}>
						<FontAwesomeIcon icon={faBars} size="lg"/>
					</NavIcon>
					<NavIcon onClick={() => setNav('chart')} active={nav === 'chart'}>
						<FontAwesomeIcon icon={faChartBar} size="lg"/>
					</NavIcon> */}
					<NavIcon onClick={() => setNav('music')} active={nav === 'music'}>
						<FontAwesomeIcon icon={faMusic} size="lg"/>
					</NavIcon>
					<SlideBtn onClick={() => {
						if(barExpand){
							setBarExpand(!barExpand);
							setBarExpandTrans(0);
						}
						else setBarExpand(!barExpand);
					}}>
						<TomatoIcon size="m"/>
						<FontAwesomeIcon icon={faArrowRight} size="lg"/>
					</SlideBtn>
    	    	</NavBar>
				{barExpandTrans?
					<NavContent>
						{nav === 'add'?
							<AddTask task={task} setTask={setTask}/>
						:
							<TaskList task={task} setTask={setTask}/>
						}
						
					</NavContent>
				:
					<></>
				}
    	  	</NavBlock>
		</Wrap>
	);
}

export default App;
