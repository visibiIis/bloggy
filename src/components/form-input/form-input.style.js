import styled from "styled-components";

export const FormGroupContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px auto;
	width: 100%;
`;

export const FormInputContainer = styled.input`
	width: 100%;
	height: 40px;
	font-size: 25px;
	font-weight: 700;
	border: 1px solid gray;
	padding: 0 10px;
	border-radius: 10px;
`;

export const FormAreaContainer = styled.textarea`
	width: 100%;
	min-height: 200px;
	max-width: 100%;
	min-width: 100%;
	padding: 10px;
	font-size: 18px;
`;

export const FormInputLabel = styled.label`
	font-size: 23px;
	font-weight: 400;
	margin: 8px 10px;
`;
