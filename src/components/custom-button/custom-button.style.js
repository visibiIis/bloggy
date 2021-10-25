import styled, { css } from "styled-components";

const getButtonStyles = (props) => {
	let subColor = "black";
	if (props.decline) {
		subColor = "red";
	}

	if (props.edit) {
		subColor = "blue";
	}

	if (props.confirm) {
		subColor = "green";
	}

	const buttonStyles = css`
		background-color: ${subColor};
		border: 1px solid ${subColor};
		color: white;
		&:hover {
			background-color: white;
			color: ${subColor};
		}
	`;

	return buttonStyles;
};

export const CustomButtonContainer = styled.button`
	cursor: pointer;
	padding: 5px 10px;
	font-size: 12px;
	font-weight: 500;
	${getButtonStyles}
`;
