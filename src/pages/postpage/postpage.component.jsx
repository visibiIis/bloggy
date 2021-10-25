import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";

import { selectPost } from "../../redux/blog/blog.selectors";
import {
	deleteStartAsync,
	createCommentStartAsync,
} from "../../redux/blog/blog.actions";

import { PostPageTitle, PostPageBody, CommentsCount } from "./postpage.style";
import {
	PageWrapper,
	ContentContainer,
	ControlPanel,
} from "../../components/_common/_common.style";
import { CustomButton } from "../../components/custom-button/custom-button.component";
import { FormInput } from "../../components/form-input/form-input.component";
import { Comment } from "../../components/comment/comment.component";

const PostPage = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const match = useRouteMatch();
	const { postId } = useParams();
	const [comment, setComment] = useState("");

	const post = useSelector((state) => selectPost(postId)(state));

	const { title, body, comments } = post;

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(createCommentStartAsync(postId, comment));
	};

	const handleDelete = () => {
		dispatch(deleteStartAsync(postId));
	};

	const handleChange = (event) => {
		const { value } = event.target;

		setComment(value);
	};

	return (
		<PageWrapper>
			<ContentContainer>
				<PostPageTitle>{title}</PostPageTitle>
				<PostPageBody>{body}</PostPageBody>
			</ContentContainer>
			<ControlPanel>
				<CustomButton onClick={handleDelete} decline>
					Delete
				</CustomButton>
				<CustomButton
					onClick={() => history.push(`${match.url}/edit`)}
					edit
				>
					Edit
				</CustomButton>
			</ControlPanel>

			<CommentsCount>Comments: {comments.length}</CommentsCount>
			{comments.length !== 0 ? (
				<ContentContainer>
					{comments.map(({ id, body }) => (
						<Comment key={id} body={body} />
					))}
				</ContentContainer>
			) : null}
			<PageWrapper as="form" width={100} onSubmit={handleSubmit}>
				<FormInput
					area
					label="Add comment"
					name="comment"
					type="text"
					value={comment}
					onChange={handleChange}
					required
				/>
				<ControlPanel>
					<CustomButton type="submit" confirm>
						Add Comment
					</CustomButton>
				</ControlPanel>
			</PageWrapper>
		</PageWrapper>
	);
};

export default PostPage;
