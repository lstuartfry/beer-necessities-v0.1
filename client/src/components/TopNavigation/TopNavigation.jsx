import React from 'react';
import styled from 'styled-components';
import { node, oneOfType, string } from 'prop-types';

import spacing from 'styles/spacing';
import theme from 'styles/theme';

const propTypes = {
	children: oneOfType([node, string]).isRequired,
};

const StyledIcon = styled.i`
	padding-right: ${spacing.small};
`;

const StyledTopNavigation = styled.div`
	align-items: center;
	background-color: ${theme.darkBrown};
	display: flex;
	color: white;
	font-size: 36px;
	min-height: 75px;
	padding: 0px ${spacing.medium};
	text-shadow: 2px 2px ${theme.darkGray};
	-webkit-text-stroke: 1px ${theme.darkGray};
`;

const TopNavigation = props => (
	<StyledTopNavigation>
		<StyledIcon className="far fa-beer" />
		{props.children}
	</StyledTopNavigation>
);

TopNavigation.propTypes = propTypes;

export default TopNavigation;
