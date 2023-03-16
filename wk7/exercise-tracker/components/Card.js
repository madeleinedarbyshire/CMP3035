import React from 'react';
import styled from 'styled-components';


const Card = props => (
	<Container>

		<Cover>
			<Image source={props.cardsrc} />
		</Cover>
		<Content>
			<Title>{props.cardtitle}</Title>
			<Caption> {props.cardstrength}</Caption>
		</Content>
	</Container>
);

export default Card;

const Container = styled.View`
	background: #eee;
	height: 200px;
	width: 100%;
	border-radius: 14px;
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);


`;

const Cover = styled.View`
	width: 100%;
	height: 120px;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
	
`;

const Image = styled.Image`
	width: 100%;
	height: 100%;
`;

const Content = styled.View`
	padding-top: 10px;
	flex-direction: row;
	align-items: center;
	height: 60px;
`;

const Title = styled.Text`
	color: #3c4560;
	font-size: 16px;
	font-weight: 600;
	text-align:center;
	width:100%;
`;

const Caption = styled.Text`
	color: #b8b3c3;
	font-size: 12px;
	font-weight: 600;
	margin-top: 4px;
`;
