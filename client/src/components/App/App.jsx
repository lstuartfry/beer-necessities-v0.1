import { hot } from 'react-hot-loader/root';
import React from 'react';

import Banner from '../ui/Banner/Banner';
import styles from './styles.css';

const App = () => (
	<div className={styles.app}>
		<Banner>Beer Necessities</Banner>
	</div>
);

export default hot(App);
