import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import api from '../services/api';
import Spot from './Spot';

export default function SpotList({ tech }) {
	const [spots, setSpots] = useState([]);

	useEffect(() => {
		async function loadSpots() {
			const res = await api.get('/spots', {
				params: { tech }
			});

			setSpots(res.data);
		}
		loadSpots();
	}, []);

	return (
		<Container>
			<Title>{tech}</Title>
			<FlatList
				data={spots}
				keyExtractor={spot => spot._id}
				horizontal
				showsHorizontalScrollIndication={false}
				renderItem={({ item: spot }) => <Spot key={spot._id} spot={spot} />}
			/>
		</Container>
	);
}

const Container = styled.View`
	margin-top: 30px;
`;

const FlatList = styled.FlatList``;

const Title = styled.Text`
	color: #fff;
	font-weight: bold;
	font-size: 18px;
	margin-left: 30px;
`;
