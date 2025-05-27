import {useEffect} from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';

/**
 * CookieBanner component displays a consent banner for cookies and manages
 * analytics preference in localStorage based on user consent.
 *
 * Uses `react-cookie-consent` to show a customizable banner at the bottom of the page.
 * Sets or removes the 'analytics_enabled' flag in localStorage depending on the user's choice.
 *
 * @component
 * @returns {JSX.Element} The rendered cookie consent banner.
 */
export default function CookieBanner() {
	useEffect(() => {
		const consent = Cookies.get('userConsent');
		if (consent === 'true') {
			localStorage.setItem('analytics_enabled', 'true');
		} else {
			localStorage.removeItem('analytics_enabled');
		}
	}, [Cookies.get('userConsent')]);

	return (
		<CookieConsent
			location='bottom'
			buttonText='Приймаю'
			declineButtonText='Відхиляю'
			enableDeclineButton
			cookieName='userConsent'
			style={{ background: '#2B373B' }}
			buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
			declineButtonStyle={{
				color: '#fff',
				backgroundColor: '#555',
				fontSize: '13px',
			}}
			expires={150}
			onAccept={() => localStorage.setItem('analytics_enabled', 'true')}
			onDecline={() => localStorage.removeItem('analytics_enabled')}
		>
			Ми використовуємо cookie для збору анонімної статистики використання
			(відвідані сторінки, час перебування) та покращення досвіду користувача.
			Зберігаються лише дані для входу в зашифрованому вигляді.
		</CookieConsent>
	);
}
