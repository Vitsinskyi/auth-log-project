import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from '../components/LoginForm';

/**
 * Storybook metadata for the LoginForm component.
 */
const meta: Meta<typeof LoginForm> = {
	component: LoginForm,
	title: 'LoginForm',
};
export default meta;

type Story = StoryObj<typeof LoginForm>;

/**
 * Default empty LoginForm.
 */
export const Default: Story = {
	render: () => <LoginForm onLogin={(token) => console.log(token)} />,
};

/**
 * LoginForm with pre-filled username and password fields.
 */
export const Prefilled: Story = {
	render: () => (
		<LoginForm
			onLogin={(token) => console.log(token)}
			defaultUsername='admin'
			defaultPassword='admin'
		/>
	),
};

/**
 * LoginForm with a failed login attempt (shows alert).
 */
/**
 * LoginForm with a failed login attempt (shows alert).
 */
export const FailedLogin: Story = {
	render: () => (
	  <LoginForm
		onLogin={() => {}}
		defaultUsername="admin"
		defaultPassword="wrongpassword"
		requestFn={async () =>
		  Promise.resolve({
			ok: false,
			status: 401,
			json: async () => ({ message: 'Invalid credentials' }),
		  } as Response)
		}
	  />
	),
  };
  
