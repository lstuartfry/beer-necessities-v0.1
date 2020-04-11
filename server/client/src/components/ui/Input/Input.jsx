import React, { useState } from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

import colors from 'styles/_colors';
import spacing from 'styles/_spacing';

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
	align-items: center;
	background: white;
	border-radius: 8px;
	box-shadow: ${props =>
		props.focus ? `0 0 0 2px ${colors.darkBrown}` : '0 0 0 1px #6b7177'};
	display: flex;
	padding: 0px ${spacing.medium};
	width: 100%;
`;

const StyledInput = styled.input`
	background: transparent;
	border: none;
	font-size: 15px;
	height: 100%;
	::placeholder {
		color: #6b7177;
		font-style: italic;
	}
`;

const Input = ({ children, wrapperClassName, ...rest }) => {
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
			className={wrapperClassName}
			focus={focus || inputFocus}
			onMouseOver={onFocus}
			onMouseOut={onBlur}
		>
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
