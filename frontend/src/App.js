//import
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import SearchRestaurants from "./pages/SearchRestaurants";
import SearchReviews from "./pages/SearchReviews";
import SearchUsers from "./pages/SearchUsers";
import Restaurant from "./pages/Restaurant";
//import RestaurantReview from "./components/RestaurantReview";
import CreateReviewPages from "./pages/CreateReview";
import Verification from "./pages/Verification";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import NewRestaurant from "./components/NewRestaurant";
import UserCommentInnerPage from "./pages/UserCommentInnerPage";
import UserRestaurant from "./components/UserRestaurant";
import UserReviewInnerPage from "./pages/UserReviewInnerPage";
import UserEdit from "./components/UserEdit";
//import CreateReview from "./components/CreateReview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="search/" element={<Search />}>
              {/* The 3 nested routes are the inner pages for the main search page */}
              <Route path="restaurants" element={<SearchRestaurants />} />
              <Route path="reviews" element={<SearchReviews />} />
              <Route path="users" element={<SearchUsers />} />
            </Route>
            <Route path="profile" element={<Profile />}>
              {/* The 4 nested routes are the inner pages for the profile page */}
              <Route path="review" element={<UserReviewInnerPage />} />
              <Route path="comment" element={<UserCommentInnerPage />} />
              <Route path="restaurant" element={<UserRestaurant />} />
              <Route path="edit" element={<UserEdit />} />
            </Route>
            {/* <Route path="review" element={<RestaurantReview />} /> */}
            <Route path="restaurants/:id" element={<Restaurant />} />
            <Route path="createreview" element={<CreateReviewPages />} />
            <Route path="newrestaurant" element={<NewRestaurant />} />
            {/* Below are the pages related to the registration / sign-up */}
            <Route path="registration" element={<Registration />} />
            <Route path="verification" element={<Verification />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
