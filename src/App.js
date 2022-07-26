import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Header from "./componets/Header";
import FeedbackList from "./componets/FeedbackList";
import FeedbackStats from "./componets/FeedbackStats";
import FeedbackForm from "./componets/FeedbackForm";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./componets/AboutIconLink";
// import Card from "./componets/shared/Card";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <Router>
      <Header text="Feedback UI" />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
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
    </Router>
  );
}

export default App;
