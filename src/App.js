import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { GlobalStyle } from "./global.styles";
import Spinner from "./components/spinner/spinner.components";
import { Header } from "./components/header/header.component";

import PostPageContainer from "./pages/postpage/postpage.container";
import EditPageContainer from "./pages/editpage/editpage.container";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const CreatePage = lazy(() =>
	import("./pages/createpage/createpage.component")
);

function App() {
	return (
		<div>
			<GlobalStyle />
			<Header />
			<Switch>
				<Suspense fallback={<Spinner />}>
					<Route exact path="/">
						<Redirect to="/posts" />
					</Route>
					<Route exact path="/posts" component={HomePage} />
					<Route exact path="/create" component={CreatePage} />
					<Route
						exact
						path={`/posts/:postId`}
						component={PostPageContainer}
					/>
					<Route
						exact
						path={`/posts/:postId/edit`}
						component={EditPageContainer}
					/>
				</Suspense>
			</Switch>
		</div>
	);
}

export default App;
