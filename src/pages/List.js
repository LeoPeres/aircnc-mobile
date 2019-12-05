import React, { useState, useEffect } from 'react';
import { AsyncStorage, ScrollView } from 'react-native';
import styled from 'styled-components';

import SpotList from '../components/SpotList';

export default function List() {
	const [techs, setTechs] = useState([]);

	useEffect(() => {
		AsyncStorage.getItem('techs').then(storagedTechs => {
			const techsArray = storagedTechs.split(',').map(tech => tech.trim());
			setTechs(techsArray);
		});
	}, []);

	return (
		<Container>
			<Title>aircnc</Title>

			<ScrollView>
				{techs.map((tech, index) => (
					<SpotList key={index} tech={tech} />
				))}
			</ScrollView>
		</Container>
	);
}

const Container = styled.View``;

const Title = styled.Text`
	color: #fff;
	font-size: 30px;
	font-weight: bold;
	text-align: center;
`;
