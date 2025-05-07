import { Link } from "react-router-dom"
import Home from "./components/Home/Home"
import Admin from "./components/Admin/Admin"
import User from "./components/User/User"
import AppRoutes from "./AppRoutes/AppRoutes"
import AdminElement from "./AppRoutes/AdminElement/AdminElement"
import UserElement from "./AppRoutes/UserElement/UserElement"
import PublicElement from "./AppRoutes/PublicElement/PublicElement"


export const userTypes = {
  public: "Public User",
  normalUser: "Normal User",
  adminUser: "Admin User"
}
export const currentUser = userTypes.normalUser


function App() {
  return (<div>
    <div style={{ backgroundColor: "magenta", color: "white", fontSize: "2vw", display: "flex", gap: "2rem", padding: "2vw", fontWeight: "500" }}>
      <Link to="/">Home</Link>
      {currentUser === userTypes.adminUser ? (<><Link to="/user">User</Link> <Link to="/admin">Admin</Link></>) : null} {currentUser === userTypes.normalUser ? (<><Link to="/user">User</Link> </>) : null}
    </div>
    <div>You are logged in as : {currentUser}
    </div>
    <AppRoutes />
  </div>)

}

export default App;