import BlogActionTypes from "./blog.types";

export const fetchPostsStart = {
	type: BlogActionTypes.FETCH_POSTS_START,
};

export const fetchPostsSuccess = (postsArray) => ({
	type: BlogActionTypes.FETCH_POSTS_SUCCESS,
	payload: postsArray,
});

export const fetchPostsFailure = (errorMessage) => ({
	type: BlogActionTypes.FETCH_POSTS_FAILURE,
	payload: errorMessage,
});

export const createPostFailure = (errorMessage) => ({
	type: BlogActionTypes.CREATE_POST_FAILURE,
	payload: errorMessage,
});

export const updatePostFailure = (errorMessage) => ({
	type: BlogActionTypes.UPDATE_POST_FAILURE,
	payload: errorMessage,
});

export const deletePostFailure = (errorMessage) => ({
	type: BlogActionTypes.DELETE_POST_FAILURE,
	payload: errorMessage,
});

export const createCommentFailure = (errorMessage) => ({
	type: BlogActionTypes.DELETE_POST_FAILURE,
	payload: errorMessage,
});

export const fetchPostsStartAsync = () => {
	return (dispatch) => {
		const requestOptions = {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		};

		dispatch(fetchPostsStart);

		fetch(
			"https://bloggy-api.herokuapp.com/posts?_embed=comments",
			requestOptions
		)
			.then((response) => response.json())
			.then((data) => dispatch(fetchPostsSuccess(data)))
			.catch((err) => dispatch(fetchPostsFailure(err)));
	};
};

export const createStartAsync = (title, body) => {
	return (dispatch) => {
		const raw = JSON.stringify({
			title,
			body,
		});

		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: raw,
		};

		fetch(`https://bloggy-api.herokuapp.com/posts`, requestOptions)
			.then((response) => response.json())
			.then((data) => alert("Post created!"))
			.catch((err) => dispatch(createPostFailure(err)));
	};
};

export const deleteStartAsync = (postId) => {
	return (dispatch) => {
		const requestOptions = {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		};

		fetch(
			`https://bloggy-api.herokuapp.com/posts/${postId}`,
			requestOptions
		)
			.then((response) => response.json())
			.then((data) => alert("Post deleted!"))
			.catch((err) => dispatch(deletePostFailure(err)));
	};
};

export const updateStartAsync = (postId, title, body) => {
	return (dispatch) => {
		const raw = JSON.stringify({
			title,
			body,
		});

		const requestOptions = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: raw,
		};

		fetch(
			`https://bloggy-api.herokuapp.com/posts/${postId}`,
			requestOptions
		)
			.then((response) => response.json())
			.then((data) => alert("Post changed!"))
			.catch((err) => dispatch(updatePostFailure(err)));
	};
};

export const createCommentStartAsync = (postId, comment) => {
	return (dispatch) => {
		const raw = JSON.stringify({
			postId: Number(postId),
			body: comment,
		});

		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: raw,
		};

		fetch(`https://bloggy-api.herokuapp.com/comments`, requestOptions)
			.then((response) => response.json())
			.then((data) => alert("Comment created!"))
			.catch((err) => dispatch(createCommentFailure(err)));
	};
};
