import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import colors from 'styles/_colors';

const propTypes = {
	variety: string,
};

const defaultProps = {
	variety: 'primary',
};

const colorVarieties = {
	primary: {
		base: colors.yellow,
		hover: colors.yellowHover,
	},
	secondary: {
		base: '#ffffff',
		hover: '',
	},
};

const StyledButton = styled.button`
	align-items: center;
	background-color: ${props => colorVarieties[props.variety].base};
  border-color: rgba(0,0,0,0.3);
	border-style; solid;
  border-top-width: 1px;
  border-bottom-width: 3px;
	border-radius: 4px;
	display: flex;
	font-size: 16px;
	font-weight: bold;
	padding: 12px 20px;
	&:hover {
		cursor: pointer;
		background-color: ${props => colorVarieties[props.variety].hover};
	}
	&:active {
    border-top-width: 3px;
    border-bottom-width: 1px;
	}
`;

const Button = props => (
	<StyledButton {...props}>{props.children}</StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
