import { useEffect, useState } from 'react';

interface Log {
	timestamp: string;
	action: string;
}

/**
 * Displays a list of activity logs fetched from the backend API.
 *
 * Fetches logs from `http://localhost:3001/api/logs` and renders them as a list.
 * If fetching fails, displays an error message in the log list.
 *
 * @returns {JSX.Element} The rendered LogsViewer component.
 */
export default function LogsViewer() {
	const [logs, setLogs] = useState<Log[]>([]);

	useEffect(() => {
		fetch('http://localhost:3001/api/logs')
			.then((res) => res.json())
			.then(setLogs)
			.catch((err) => {
				console.error('Failed to fetch logs:', err);
				setLogs([{ timestamp: 'N/A', action: 'Не вдалося завантажити логи' }]);
			});
	}, []);

	return (
		<div>
			<h2>Activity Logs</h2>
			<ul>
				{logs.map((log, i) => (
					<li key={i}>
						{log.timestamp} — {log.action}
					</li>
				))}
			</ul>
		</div>
	);
}
