import Home from "./pages/Home";
import Register from './pages/Register';
import Login from './pages/Login';
import './style.scss';
import { BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)

const ProtectedRoute = ({children}) =>{
if(!currentUser){
return <Navigate to="/Login" />
}
return children
}

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
      <ProtectedRoute><Home/></ProtectedRoute>
      } />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
