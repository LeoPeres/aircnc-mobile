import React from 'react';
import styled from 'styled-components/native';

export default function Spot({ spot }) {
	console.log(spot);
	return (
		<Container>
			<Image source={{ uri: spot.thumbnail_url }} />
			<Title>{spot.company}</Title>
			{spot.techs.map((tech, index) => (
				<Paragraph key={index}>{tech}</Paragraph>
			))}
			<Badge>{spot.price ? `R$${spot.price}/dia` : 'Grátis'}</Badge>
			<Button onPress={() => {}}>
				<ButtonText>Reservar</ButtonText>
			</Button>
		</Container>
	);
}

const Container = styled.View`
	background: #fff;
	padding: 20px;
	margin: 10px 20px;
	border-radius: 10px;
	box-shadow: 0 5px 15px #7fe473;
`;

const Title = styled.Text`
	font-size: 24px;
	font-weight: bold;
	color: #000;
	margin-top: 20px;
`;

const Paragraph = styled.Text`
	color: #ccc;
	margin: 1px 0;
`;

const Image = styled.Image`
	width: 200px;
	height: 120px;
	border-radius: 10px;
`;

const Badge = styled.Text`
	font-size: 15px;
	color: #7fe473;
	margin-top: 5px;
`;

const Button = styled.TouchableOpacity`
	margin: 20px 0 5px;
	background: #7fe473;
	padding: 5px 25px;
	border-radius: 3px;
`;

const ButtonText = styled.Text`
	color: #fff;
	font-weight: bold;
	text-align: center;
`;
