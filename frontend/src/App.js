//import
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="profile" element={<Profile />} />
            <Route path="restaurant" element={<Restaurant />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
