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
import RestaurantReview from "./components/RestaurantReview";
import CreateReview from "./components/CreateReview";
import Registration from "./pages/Registration";

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
            <Route path="profile" element={<Profile />} />
            {/* <Route path="review" element={<RestaurantReview />} /> */}
            {/* <Route path="createreview" element={<CreateReview />} /> */}
            <Route path="restaurant" element={<Restaurant />} />
            {/* Below are the pages related to the registration / sign-up */}
            <Route path="registration" element={<Registration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
