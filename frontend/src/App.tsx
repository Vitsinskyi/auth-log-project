import { useState } from 'react';
import LoginForm from './components/LoginForm';
import LogsViewer from './components/LogsViewer';
import CookieBanner from './components/CookieBanner';

/**
 * App is the main component of the application.
 * 
 * It manages authentication state and conditionally renders the LoginForm or LogsViewer
 * based on whether a user token is present. The CookieBanner is always displayed.
 *
 * @component
 * @returns {JSX.Element} The rendered main application component.
 */
function App() {
	const [token, setToken] = useState('');

	return (
		<div>
			{!token ? <LoginForm onLogin={setToken} /> : <LogsViewer />}
			<CookieBanner />
		</div>
	);
}

export default App;
