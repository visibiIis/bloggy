import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
	text-align: center;
	margin: 30px auto 10px;
`;

export const LogoContainer = styled(Link)`
	font-size: 40px;
	font-weight: 700;
	text-transform: uppercase;
`;
