import React from "react";
import { Container } from "@material-ui/core";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
const App = () => {
	const user = JSON.parse(localStorage.getItem("profile"));
	return (
		<Router>
			<Container maxWidth="xl">
				<Navbar />
				<Switch>
					<Route exact path="/" component={() => <Redirect to="/posts" />} />
					<Route exact path="/posts" component={Home} />
					<Route exact path="/posts/search" component={Home} />
					<Route exact path="/posts/:id" component={PostDetails} />
					{/* Check if user logged in. If they're, redirect to /posts */}
					<Route
						path="/auth"
						component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
					/>
				</Switch>
			</Container>
		</Router>
	);
};

export default App;
