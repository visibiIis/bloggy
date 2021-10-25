import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostContainer = styled.div`
	border-bottom: 1px solid silver;
	padding: 15px 0;
	margin-bottom: 35px;
	display: flex;
	flex-direction: column;

	&:last-child {
		border: none;
		margin-bottom: 0;
	}
`;

export const PostTitle = styled.div`
	font-size: 18px;
	font-weight: 600;
`;

export const PostBody = styled.div`
	text-align: justify;
	margin: 10px 0 20px;
`;

export const CommentsCount = styled.div`
	font-size: 14px;
	font-weight: 500;
`;

export const MoreLink = styled(Link)`
	display: block;
	color: gray;
	margin: 5px auto;
`;
