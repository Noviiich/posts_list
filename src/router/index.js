import PostIdPage from "../components/PostIdPage";
import About from "../pages/About";
import Login from "../pages/Login";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/about', element: <About />, exact: true},
    {path: '/posts', element: <Posts />, exact: true},
    {path: '/posts/:id', element: <PostIdPage />, exact: true},
]

export const publicRoutes = [
    {path: '/login', element: <Login />, exact: true},
]