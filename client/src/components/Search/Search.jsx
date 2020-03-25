import React, { useState } from 'react';
import axios from 'axios';

import Button from 'ui/Button/Button';
import Input from 'ui/Input/Input';
import styles from './styles.scss';

const Search = () => {
	const [value, setValue] = useState('');
	const onChange = e => setValue(e.target.value);
	const onSubmit = async e => {
		e.preventDefault();
		const response = await axios.get('/youtube', value);
		console.log('response in react is : ', response);
	};
	return (
		<div className={styles.search}>
			<form className={styles.form} onSubmit={onSubmit}>
				<Input
					className={styles.input}
					wrapperClassName={styles.inputWrapper}
					onChange={onChange}
					value={value}
					placeholder="Enter the name of a beer or brewery"
				>
					<i className={`${styles.searchIcon} far fa-search`} />
				</Input>
				<Button>
					{/* <i className={`${styles.buttonIcon} far fa-beer`} /> */}
					Cheers!
				</Button>
			</form>
		</div>
	);
};

export default Search;
