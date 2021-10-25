import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import EditPage from "./editpage.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { selectIsPostsLoaded } from "../../redux/blog/blog.selectors";

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsPostsLoaded(state),
});

const EditPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(EditPage);

export default EditPageContainer;
