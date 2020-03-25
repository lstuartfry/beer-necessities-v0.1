import React from 'react';
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

const StyledInput = styled.input`
	border: none;
	border-radius: 8px;
	font-size: 15px;
	padding: 16px;
	width: 100%;
	::placeholder {
		color: rgba(0, 0, 0, 0.7);
		font-style: italic;
	}
`;

const Input = props => (
	<StyledInput
		{...props}
		onChange={props.onChange}
		placeholder={props.placeholder}
		value={props.value}
	/>
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
