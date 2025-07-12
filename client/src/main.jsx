import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Login from './pages/Login/Login.jsx';
import Signup from "./pages/Signup/Signup.jsx"
import ClientDashboard from "./pages/Client/ClientDashboard.jsx"
import AdminDashboard from './pages/Admin/AdminDashboard/AdminDashboard.jsx';
import AdminMenuManagement from './pages/Admin/AdminMenuManagement/AdminMenuManagement.jsx';
import AdminFeedbackManagement from './pages/Admin/AdminFeedbackManagement/AdminFeedbackManagement.jsx';
import AdminOrderManagement from './pages/Admin/AdminOrderManagement/AdminOrderManagement.jsx';
import AdminHome from './pages/Admin/AdminHome/AdminHome.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { createBrowserRouter,Navigate,RouterProvider } from 'react-router';
import store from './store/storeContext.js';
import { Provider, useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {
  const userName =sessionStorage.getItem("userName");
   if (!userName || userName.length === 0) {
    return <Navigate to="/signup" replace />;
  }
  return children;
};

const AdminProtectedRoute=({children})=>{
  const adminLogged = sessionStorage.getItem("adminExists");
  if(!adminLogged){
    return <Navigate to="/login" replace/>;
  }
  else{
    return children;
  }
}

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/clientDashboard", element: 
  <ProtectedRoute>
    <ClientDashboard />
  </ProtectedRoute>},
  {path:"/adminHome",element:
    <AdminProtectedRoute>
      <AdminHome/>
    </AdminProtectedRoute>,children:[
      {path:"AdminDashboard",element:<AdminDashboard/>},
      {path:"AdminMenuManagement",element:<AdminMenuManagement/>},
      {path:"AdminFeedbackManagement",element:<AdminFeedbackManagement/>},     
      {path:"AdminOrderManagement",element:<AdminOrderManagement/>},     
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider  store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
