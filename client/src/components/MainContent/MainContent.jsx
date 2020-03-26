import React from 'react';

import Disclaimer from '../Disclaimer/Disclaimer';
import Landing from '../Landing/Landing';
import Search from '../Search/Search';
import styles from './styles';

const MainContent = () => (
	<div className={styles.mainContent}>
		<Landing />
		<Search />
		<Disclaimer />
	</div>
);

export default MainContent;
