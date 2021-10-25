import styled from "styled-components";

export const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: ${({ width = 60 }) => width}%;
	margin: 0 auto;
`;

export const ContentContainer = styled.div`
	width: 100%;
	box-shadow: 0 0 10px silver;
	padding: 15px 25px;
	margin: 10px auto;
`;

export const ControlPanel = styled.div`
	display: inline-flex;
	flex-wrap: wrap;
	gap: 12px;
	margin-right: 0;
	margin-left: auto;
`;

export const Heading = styled.div`
	font-size: 26px;
	font-weight: 400;
	margin: 10px auto 0;
`;
