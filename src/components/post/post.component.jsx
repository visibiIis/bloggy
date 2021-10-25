import { useRouteMatch } from "react-router-dom";
import {
	PostContainer,
	PostTitle,
	PostBody,
	CommentsCount,
	MoreLink,
} from "./post.style";

export const Post = ({ postId, title, body, comments }) => {
	const match = useRouteMatch();

	return (
		<PostContainer>
			<PostTitle>{title}</PostTitle>
			<PostBody>{body}</PostBody>
			<CommentsCount>Comments: {comments.length}</CommentsCount>
			<MoreLink to={`${match.path}/${postId}`}>More...</MoreLink>
		</PostContainer>
	);
};
