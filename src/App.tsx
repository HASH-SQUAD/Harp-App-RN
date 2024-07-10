import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigations/index';

const App = () => {
	return (
		<NavigationContainer>
			<StackNavigation />
		</NavigationContainer>
	);
};

export default App;