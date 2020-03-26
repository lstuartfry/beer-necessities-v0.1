import React from 'react';
import { node, oneOfType, string } from 'prop-types';
import styled from 'styled-components';

import spacing from 'styles/_spacing';

const propTypes = {
	children: oneOfType([node, string]).isRequired,
};

const StyledHeader = styled.div`
	font-size: 4em;
	font-weight: bold;
	margin: ${spacing.large};
`;

const Header = props => (
	<StyledHeader {...props}>{props.children}</StyledHeader>
);

Header.propTypes = propTypes;

export default Header;
