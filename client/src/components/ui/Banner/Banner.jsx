import React from 'react';
import styled from 'styled-components';
import { node, oneOfType, string } from 'prop-types';
import styles from './styles.css';

const propTypes = {
	children: oneOfType([node, string]).isRequired,
};

const StyledBanner = styled.div`
	background-color: #e9e3b5;
	color: #8f2181;
	font-size: 60px;
	text-align: center;
`;

const Banner = props => (
	<StyledBanner className={styles.banner}>{props.children}</StyledBanner>
);

Banner.propTypes = propTypes;

export default Banner;
