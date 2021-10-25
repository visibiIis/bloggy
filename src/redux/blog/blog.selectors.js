import { createSelector } from "reselect";

const selectBlog = (state) => state.blog;

export const selectBlogPosts = createSelector(
	[selectBlog],
	(blog) => blog.posts
);

export const selectPost = (postUrlParam) =>
	createSelector([selectBlogPosts], (posts) =>
		posts ? posts.find((post) => post.id === Number(postUrlParam)) : null
	);

export const selectIsFetching = createSelector(
	[selectBlog],
	(blog) => blog.isFetching
);

export const selectIsPostsLoaded = createSelector(
	[selectBlog],
	(blog) => !!blog.posts
);
