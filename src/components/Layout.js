import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb as faLightbulbOff } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as faLightbulbOn } from '@fortawesome/free-regular-svg-icons';

import styles from './Layout.module.scss';
import Button from './Button';

export default ({ children, darkMode, onToggleTheme }) => {
	return (
		<div className={styles.page + (darkMode ? ` ${styles.dark}` : '')}>
			<header className={styles.header}>
				<h1 className={styles.header__title}>Pomodoro</h1>
				<nav>
					<a
						className={styles.header__link}
						href="https://brettk.dev/"
						target="_blank"
						rel="noopener noreferrer"
					>
						brettk.dev
					</a>
					<Button
						darkMode={darkMode}
						onClick={onToggleTheme}
						label="toggle theme"
					>
						<FontAwesomeIcon icon={darkMode ? faLightbulbOn : faLightbulbOff} />
					</Button>
				</nav>
			</header>
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>
				<a
					className={styles.footer__link}
					href="https://github.com/bkinnamon"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faGithub} size="lg" />
				</a>
				<a
					className={styles.footer__link}
					href="https://twitter.com/bdkinnamon"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faTwitter} size="lg" />
				</a>
			</footer>
		</div>
	);
};
