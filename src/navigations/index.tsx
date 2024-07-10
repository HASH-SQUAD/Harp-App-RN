import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '../screens/auth/index';

const Stack = createStackNavigator();

const StackNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="auth"
				component={Auth}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default StackNavigation;
