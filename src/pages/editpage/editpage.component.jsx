import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectPost } from "../../redux/blog/blog.selectors";

import { updateStartAsync } from "../../redux/blog/blog.actions";

import {
	ControlPanel,
	PageWrapper,
	Heading,
} from "../../components/_common/_common.style";
import { FormInput } from "../../components/form-input/form-input.component";
import { CustomButton } from "../../components/custom-button/custom-button.component";

const EditPage = () => {
	const { postId } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const post = useSelector((state) => selectPost(postId)(state));

	const [postInput, setPostInput] = useState({
		title: post.title,
		body: post.body,
	});

	const { title, body } = postInput;

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(updateStartAsync(postId, title, body));
	};

	const handleCancel = (event) => {
		event.preventDefault();

		history.push(`/posts/${postId}`);
	};

	const handleChange = (event) => {
		const { value, name } = event.target;

		setPostInput({ ...postInput, [name]: value });
	};

	return (
		<PageWrapper as="form" onSubmit={handleSubmit}>
			<Heading>Update Post</Heading>
			<FormInput
				name="title"
				label="Title"
				type="text"
				value={title}
				handleChange={handleChange}
				required
			/>
			<FormInput
				area
				label="Body"
				name="body"
				type="text"
				value={body}
				onChange={handleChange}
				required
			/>
			<ControlPanel>
				<CustomButton type="button" decline onClick={handleCancel}>
					Cancel
				</CustomButton>
				<CustomButton type="submit" confirm>
					Submit
				</CustomButton>
			</ControlPanel>
		</PageWrapper>
	);
};

export default EditPage;
