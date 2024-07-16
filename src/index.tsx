import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/routers/error-page/ErrorPage";
import BlogPage from "./pages/routers/blog-page/BlogPage";
import MainPage from "./pages/routers/main-page/MainPage";
import ChatPage from "./pages/routers/chat-page/ChatPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <MainPage />,  // Добавьте этот маршрут
            },
            {
                path: "chat",
                element: <ChatPage />
            },
            {
                path: "blog",
                element: <BlogPage />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
