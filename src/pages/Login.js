import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import styled from 'styled-components';

import api from '../services/api';

export default function Login({ navigation }) {
	const [email, setEmail] = useState('');
	const [techs, setTechs] = useState('');

	useEffect(() => {
		AsyncStorage.getItem('user').then(user => {
			if (user) {
				navigation.navigate('List');
			}
		});
	}, []);

	async function handleSubmit() {
		const res = await api.post('/sessions', {
			email
		});

		const { _id } = res.data;

		await AsyncStorage.setItem('user', _id);
		await AsyncStorage.setItem('techs', techs);

		navigation.navigate('List');
	}

	return (
		<Container behavior="padding">
			<Title>aircnc</Title>
			<Form>
				<Input
					placeholder="Seu email"
					placeholderTextColor="#CCC"
					keyboardType="email-address"
					autoCapitalize="none"
					autoCorrect={false}
					value={email}
					onChangeText={setEmail}
				/>

				<Input
					placeholder="Tecnologias de interesse"
					placeholderTextColor="#CCC"
					autoCapitalize="words"
					autoCorrect={false}
					value={techs}
					onChangeText={setTechs}
				/>

				<Button onPress={handleSubmit}>
					<ButtonText>Entrar</ButtonText>
				</Button>
			</Form>
		</Container>
	);
}

const Container = styled.KeyboardAvoidingView`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

const Title = styled.Text`
	color: #fff;
	font-size: 30px;
	font-weight: bold;
	text-align: center;
`;

const Form = styled.View`
	padding: 0 30px;
	margin-top: 30px;
	align-self: stretch;
	width: 300px;
`;

const Input = styled.TextInput`
	background: #fff;
	padding: 5px 25px;
	color: #000;
	height: 44px;
	font-size: 14px;
	margin-bottom: 20px;
	border-radius: 5px;
`;

const Button = styled.TouchableOpacity`
	background: #fff;
	padding: 5px 25px;
	border-radius: 3px;
`;

const ButtonText = styled.Text`
	color: #7fe473;
	font-weight: bold;
	text-align: center;
`;
