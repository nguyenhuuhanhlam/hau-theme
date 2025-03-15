import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/home'
import News from '../pages/news'

import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'news', element: <News /> },
			{ path: 'news/:category', element: <News /> },
			{ path: 'news/:category/:post_id', element: <News /> },
		]
	}
])

const MainRouter = () => {
	return <RouterProvider router={router} />
}

export default MainRouter