// Importo lo stile da App.css
import "./App.css";

// Importo lo stile di react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Importo il BrowserRoute da react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importo i componenti utilizzati
import UsersPage from "./component/UsersPage/UsersPage";
import Footer from "./component/Footer/Footer";
import ProfilePage from "./component/ProfilePage/ProfilePage";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
