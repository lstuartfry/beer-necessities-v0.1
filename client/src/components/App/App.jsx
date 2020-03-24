import { hot } from 'react-hot-loader/root';
import React from 'react';

import TopNavigation from '../TopNavigation/TopNavigation';
import MainContent from '../MainContent/MainContent';

import styles from './styles.css';
import theme from '../../styles/theme';

const App = () => (
	<div className={styles.app} style={{ backgroundColor: theme.lightBlue }}>
		<TopNavigation>Beer Necessities</TopNavigation>
		<MainContent />
	</div>
);

export default hot(App);
