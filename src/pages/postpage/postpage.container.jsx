import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import PostPage from "./postpage.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { selectIsPostsLoaded } from "../../redux/blog/blog.selectors";

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsPostsLoaded(state),
});

const PostPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(PostPage);

export default PostPageContainer;
