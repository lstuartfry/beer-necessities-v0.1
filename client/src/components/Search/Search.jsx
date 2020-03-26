import React, { useState } from 'react';

import API from 'api';
import Button from 'ui/Button/Button';
import Input from 'ui/Input/Input';
import styles from './styles';

const Search = () => {
	const [value, setValue] = useState('');
	const onChange = e => setValue(e.target.value);
	const onSubmit = async e => {
		e.preventDefault();
		const response = await API.post('/youtube', { query: value });
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
					placeholder="Enter a search term"
				>
					<i className={`${styles.searchIcon} far fa-search`} />
				</Input>
				<Button fontSize={22}>Beer me!</Button>
			</form>
		</div>
	);
};

export default Search;
