import { hot } from 'react-hot-loader/root';
import React from 'react';

import TopNavigation from '../TopNavigation/TopNavigation';
import MainContent from '../MainContent/MainContent';

import styles from './styles.scss';

const App = () => (
	<div className={styles.app}>
		<TopNavigation>Beer Necessities</TopNavigation>
		<MainContent />
	</div>
);

export default hot(App);
