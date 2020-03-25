import React, { useState } from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const propTypes = {
	onChange: func.isRequired,
	placeholder: string,
	value: string,
};

const defaultProps = {
	placeholder: '',
	value: '',
};

const StyledInputWrapper = styled.div`
	background: white;
	border-radius: 8px;
	box-shadow: ${props =>
		props.focus ? '0 0 0 2px #863710' : '0 0 0 1px #6b7177'};
	padding: 16px;
	width: 100%;
`;

const StyledInput = styled.input`
	background: transparent;
	border: none;
	font-size: 15px;
	::placeholder {
		color: rgba(0, 0, 0, 0.7);
		font-style: italic;
	}
`;

const Input = ({ children, ...rest }) => {
	const [focus, setFocus] = useState(false);
	const [inputFocus, setInputFocus] = useState(false);

	const onFocus = () => {
		setFocus(true);
	};

	const onBlur = () => {
		setFocus(false);
	};

	const onInputFocus = () => {
		setInputFocus(true);
	};

	const onInputBlur = () => {
		setInputFocus(false);
	};

	return (
		<StyledInputWrapper
			focus={focus || inputFocus}
			onMouseOver={onFocus}
			onMouseOut={onBlur}>
			{children}
			<StyledInput
				{...rest}
				onChange={rest.onChange}
				onFocus={onInputFocus}
				onBlur={onInputBlur}
				placeholder={rest.placeholder}
				value={rest.value}
			/>
		</StyledInputWrapper>
	);
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
