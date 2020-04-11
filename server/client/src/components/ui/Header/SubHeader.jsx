import React from 'react';
import { node, oneOfType, string } from 'prop-types';
import styled from 'styled-components';

const propTypes = {
	children: oneOfType([node, string]).isRequired,
};

const StyledSubHeader = styled.div`
	font-size: 1.75em;
	font-weight: 200;
`;

const SubHeader = props => (
	<StyledSubHeader {...props}>{props.children}</StyledSubHeader>
);

SubHeader.propTypes = propTypes;

export default SubHeader;
