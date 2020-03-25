import React from 'react';
import { node, oneOfType, string } from 'prop-types';

import styles from './styles.scss';

const propTypes = {
	children: oneOfType([node, string]).isRequired,
};

const TopNavigation = props => (
	<div className={styles.topNavigation}>
		<i className={`${styles.icon} far fa-beer`} />
		{props.children}
	</div>
);

TopNavigation.propTypes = propTypes;

export default TopNavigation;
