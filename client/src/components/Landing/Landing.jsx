import React from 'react';

import Header from 'ui/Header/Header';
import SubHeader from 'ui/Header/SubHeader';
import styles from './styles';

const Landing = () => (
	<div className={styles.landing}>
		<div className={styles.logo}>
			<div className={styles.imageContainer}>
				<img src="beer_bear.png" />
			</div>
			<div className={styles.textContainer}>BEER NECESSITIES</div>
		</div>
		<Header className={styles.header}>Thirsty (for knowledge)?</Header>
		<SubHeader className={styles.subHeader}>
			Enter the name of a beer or brewery below to get started
		</SubHeader>
	</div>
);

export default Landing;
