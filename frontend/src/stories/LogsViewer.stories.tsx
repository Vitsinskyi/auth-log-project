import LogsViewer from '../components/LogsViewer';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LogsViewer> = {
	component: LogsViewer,
	title: 'LogsViewer',
};
export default meta;

type Story = StoryObj<typeof LogsViewer>;

/**
 * Default LogsViewer with no logs (empty state).
 */
export const Empty: Story = {
	render: () => {
		global.fetch = async () =>
			Promise.resolve({
				ok: true,
				json: async () => [],
			} as Response);
		return <LogsViewer />;
	},
};

/**
 * LogsViewer with sample logs.
 */
export const WithLogs: Story = {
	render: () => {
		global.fetch = async () =>
			Promise.resolve({
				ok: true,
				json: async () => [
					{ timestamp: '2024-05-01 10:00', action: 'User logged in' },
					{ timestamp: '2024-05-01 10:05', action: 'User viewed dashboard' },
				],
			} as Response);
		return <LogsViewer />;
	},
};

/**
 * LogsViewer with fetch error (failed to load logs).
 */
export const FetchError: Story = {
	render: () => {
	  global.fetch = async () => Promise.reject(new Error('Network error'));
	  return <LogsViewer />;
	},
  };
