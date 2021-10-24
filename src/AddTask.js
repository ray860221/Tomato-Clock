import React, {useState} from 'react';
import styled from 'styled-components'

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
    color: #ACACAC;

`;
const AddTaskName = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
`;
const AddTaskNameInput = styled.input`
    font-family: sans-serif;
    padding: 16px;
    outline: none;
    border: 0px;
    font-size: 16px;
    background: #FCFCFC;
    border-radius: 5px;
    margin-top: 10px;
`;
const AddTaskTomato = styled(AddTaskName)`
    margin-bottom: 50px;
`;
const AddTaskBtn = styled.div`
    color: #FCFCFC;
    background: #EA5548;
    border-radius: 30px;
    text-align: center;
    padding: 18px 0;
    cursor: pointer;
`;
const TomatoClock = styled.div`
    width: 25px;
    height: 25px;
    background: ${props=>props.isActive?'#EA5548':'#ACACAC'};
    border-radius: 50%;
    position: relative;
    cursor: pointer;
`;
const Leaf = styled.div`
    width: 5px;
    height: 7px;
    background: ${props=>props.isActive?'#316901':'#6E6E6E'};
    border-radius: 50px;
    position: absolute;
    right: 0px;
    transform: rotate(45deg);
`;
const TomatoRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;


const AddTask = (props) => {

    const [name, setName] = useState('');
    const [time, setTime] = useState(0);

    const Tomato = (a) => {
        // console.log(index)
        return (
            <TomatoClock onClick={()=>setTime(a.index)} isActive={time >= a.index}>
                <Leaf isActive={time >= a.index}/>
            </TomatoClock>
        )
    }
  	return (
    	<>
            <Title>
                ADD NEW TASK
            </Title>
            <Content>
                <AddTaskName>
                    TASK TITLE
                    <AddTaskNameInput value={name} onChange={ e => setName(e.target.value)}/>
                </AddTaskName>
                <AddTaskTomato>
                    ESTIMATED TOMOTO
                    <TomatoRow>
                        {
                            Array(12).fill(0).map((_, a)=>{
                                return <Tomato index={a} key={a}/>
                            })
                        }
                    </TomatoRow>
                </AddTaskTomato>
                {/* <AddTaskBtn onClick={()=>console.log(`Create Task: Name: ${name}, Time: ${(time+1)*10} min`)}> */}
                <AddTaskBtn onClick={()=>{
                    props.setTask([...props.task, {
                        name: name,
                        second: (time+1)*300,
                        tomatos: time+1,
                    }]);
                    setName('');
                    setTime(0);
                }}>
                    ADD TASK
                </AddTaskBtn>
            </Content>
		</>
	);
}

export default AddTask;
