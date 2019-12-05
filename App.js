import React from 'react';
import styled from 'styled-components';

import Routes from './src/routes';

export default function App() {
	console.log('start app');
	return (
		<Container>
			<Routes />
		</Container>
	);
}

const Container = styled.View`
	flex: 1;
	background: #7fe473;
	padding-top: 60px;
`;
