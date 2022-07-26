import { Routes, Route } from "react-router-dom";

import Header from "./componets/Header";
import FeedbackList from "./componets/FeedbackList";
import FeedbackStats from "./componets/FeedbackStats";
import FeedbackForm from "./componets/FeedbackForm";
import AboutIconLink from "./componets/AboutIconLink";
// import Card from "./componets/shared/Card";

import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Header text="Feedback UI" />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
                <AboutIconLink />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
        </Routes>

        {/* We can use this in the Navigation Bar */}
        {/* <Card>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </Card> */}
      </div>
    </FeedbackProvider>
  );
}

export default App;
