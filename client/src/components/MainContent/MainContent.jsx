import React from 'react';

import Landing from '../Landing/Landing';
import Search from '../Search/Search';
import styles from './styles';

const MainContent = () => (
	<div className={styles.mainContent}>
		<Landing />
		<Search />
	</div>
);

export default MainContent;
