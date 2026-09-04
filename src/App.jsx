import { Routes, Route } from "react-router-dom";
import SocailApp from "./components/SocailApp";
import UserProfile from "./components/UserProfile/UserProfile";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Routes>
        {/* This is home route setup */}
        <Route path="/" element={<SocailApp />}></Route>
        {/* This is for user route setup */}
        <Route
          path="/users/:id"
          element={
            <>
              <Navbar />
              <UserProfile />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
