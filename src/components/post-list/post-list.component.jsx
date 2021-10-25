import { useSelector } from "react-redux";

import { selectBlogPosts } from "../../redux/blog/blog.selectors";

import { ContentContainer } from "../_common/_common.style";
import { Post } from "../post/post.component";

export const PostList = () => {
	const posts = useSelector(selectBlogPosts);

	return (
		<ContentContainer>
			{posts.map(({ id, ...otherPostProps }) => (
				<Post key={id} postId={id} {...otherPostProps} />
			))}
		</ContentContainer>
	);
};
