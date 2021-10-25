import { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
	PageWrapper,
	ControlPanel,
} from "../../components/_common/_common.style";
import { CustomButton } from "../../components/custom-button/custom-button.component";

import PostListContainer from "../../components/post-list/post-list.container";

import { fetchPostsStartAsync } from "../../redux/blog/blog.actions";

const HomePage = ({ match }) => {
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPostsStartAsync());
	}, [dispatch]);

	return (
		<PageWrapper>
			<ControlPanel>
				<CustomButton confirm onClick={() => history.push("/create")}>
					Create Post
				</CustomButton>
			</ControlPanel>

			<Route exact path={`${match.path}`} component={PostListContainer} />
		</PageWrapper>
	);
};

export default HomePage;
