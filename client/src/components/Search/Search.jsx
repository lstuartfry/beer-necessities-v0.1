import React, { useState } from 'react';
import axios from 'axios';

import styles from './styles.css';

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
			<form onSubmit={onSubmit}>
				<input value={value} onChange={onChange} />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Search;
