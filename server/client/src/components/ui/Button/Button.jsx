import React from 'react';
import { number, string } from 'prop-types';
import styled from 'styled-components';

import colors from 'styles/_colors';

const propTypes = {
	fontSize: number,
	variety: string,
};

const defaultProps = {
	fontSize: 16,
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
  color: ${colors.darkGray};
	display: flex;
  font-family: inherit;
	font-size: ${props => props.fontSize}px; 
	font-weight: bold;
	padding: 12px 20px;
  white-space: nowrap;
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
