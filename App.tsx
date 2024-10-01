import React, { useEffect, useRef, useState } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, StatusBar, View } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App(): React.ReactElement {
	const statusBarHeight: number = Constants.statusBarHeight;
	const webViewRef = useRef<WebView>(null);
	const [isAuthPage, setIsAuthPage] = useState(false);

	const handleWebViewLoad = () => {
		webViewRef.current?.postMessage(statusBarHeight.toString());
	};

	const handleNavigationStateChange = (navState: any) => {
		const currentUrl = navState.url;
		setIsAuthPage(
			currentUrl.includes('/auth') || currentUrl.includes('/register/surveyend')
		);
	};

	useEffect(() => {
		if (webViewRef.current) {
			webViewRef.current.postMessage(statusBarHeight.toString());
		}
	}, [statusBarHeight]);

	return (
		<>
			<StatusBar
				backgroundColor={isAuthPage ? 'transparent' : 'white'}
				barStyle='dark-content'
				translucent={isAuthPage}
			/>
			<SafeAreaView style={styles.safeArea}>
				<View
					style={[
						styles.container,
						{ marginTop: isAuthPage ? 0 : Constants.statusBarHeight },
					]}
				>
					<WebView
						style={styles.webView}
						source={{ uri: 'https://harp-frontend.netlify.app/splash' }}
						// source={{ uri: 'http://localhost:3000/' }}
						ref={webViewRef}
						onLoad={handleWebViewLoad}
						onNavigationStateChange={handleNavigationStateChange}
					/>
				</View>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: 'white',
	},
	container: {
		flex: 1,
	},
	webView: {
		flex: 1,
	},
});
