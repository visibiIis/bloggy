import BlogActionTypes from "./blog.types";

const INITIAL_STATE = {
	posts: undefined,
	isFetching: false,
	error: undefined,
};

const blogReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BlogActionTypes.FETCH_POSTS_START:
			return {
				...state,
				isFetching: true,
			};
		case BlogActionTypes.FETCH_POSTS_SUCCESS:
			return {
				...state,
				isFetching: false,
				posts: action.payload,
			};
		case BlogActionTypes.FETCH_POSTS_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};
		case BlogActionTypes.UPDATE_POST_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};
		case BlogActionTypes.CREATE_POST_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};
		case BlogActionTypes.DELETE_POST_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};
		case BlogActionTypes.CREATE_COMMENT_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default blogReducer;
