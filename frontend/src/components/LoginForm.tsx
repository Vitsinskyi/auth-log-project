import React, { useState } from 'react';

interface Props {
	onLogin: (token: string) => void;
	defaultUsername?: string;
	defaultPassword?: string;
	requestFn?: typeof fetch;
}

/**
 * Renders a login form with username and password fields.
 *
 * On submit, sends a POST request to the backend and calls `onLogin` with the received token if successful.
 * Optionally accepts default values for username and password, and a custom request function for testing.
 *
 * @param props - Component props
 * @param props.onLogin - Callback invoked with the authentication token after successful login
 * @param props.defaultUsername - (Optional) Default username value
 * @param props.defaultPassword - (Optional) Default password value
 * @param props.requestFn - (Optional) Custom fetch function for requests (useful for testing)
 * @returns The rendered login form as a JSX element
 */
export default function LoginForm({
	onLogin,
	defaultUsername = '',
	defaultPassword = '',
	requestFn,
}: Props) {
	const [username, setUsername] = useState(defaultUsername);
	const [password, setPassword] = useState(defaultPassword);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const request = requestFn || fetch;

		const res = await request('http://localhost:3001/api/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password }),
		});

		if (res.ok) {
			const data = await res.json();
			onLogin(data.token);
		} else {
			alert('Login failed');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>
			<input
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder='Username'
			/>
			<input
				type='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder='Password'
			/>
			<button type='submit'>Login</button>
		</form>
	);
}
