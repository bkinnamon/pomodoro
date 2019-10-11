import React from 'react';
import styles from './Button.module.scss';

export default ({ children, darkMode, label = '', onClick }) => {
	return (
		<button
			className={styles.button + (darkMode ? ` ${styles.dark}` : '')}
			onClick={onClick}
			aria-label={label}
			title={label}
		>
			{children}
		</button>
	);
};
