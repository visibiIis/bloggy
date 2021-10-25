import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { PostList } from "./post-list.component";
import WithSpinner from "../with-spinner/with-spinner.component";

import { selectIsPostsLoaded } from "../../redux/blog/blog.selectors";

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsPostsLoaded(state),
});

const PostListContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(PostList);

export default PostListContainer;
