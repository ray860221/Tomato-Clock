import React  from 'react';
import styled from 'styled-components'

const Tomato = styled.div`
	width: ${props=>props.size === 's'?'12.5px':'25px'};
	height: ${props=>props.size === 's'?'12.5px':'25px'};
	background: #EA5548;
	border-radius: 50%;
	position: relative;
`;
const TomatoLeaf = styled.div`
	width: ${props=>props.size === 's'?'2.5px':'5px'};
	height: ${props=>props.size === 's'?'3px':'6.25px'};
	background: #316901;
	border-radius: 50px;
	position: absolute;
	right: 0px;
	transform: translate(-1px, 0.5px) rotate(45deg);
`;

const TomatoIcon = (props) => {

  	return (
        <>
            <Tomato size={props.size}>
				<TomatoLeaf size={props.size} />
			</Tomato>
		</>
	);
}

export default TomatoIcon;
