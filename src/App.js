import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/userList";
import User from "./components/user";

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
