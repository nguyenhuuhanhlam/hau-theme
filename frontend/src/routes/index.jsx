import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

import MainLayout from '../layouts/MainLayout'
import GroupSkeleton from '@/components/common/group-skeleton'

const HomePage = lazy(() => import('@/pages/home'))
const News = lazy(() => import('@/pages/news'))

import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element:
					<Suspense fallback={<GroupSkeleton />}>
						<HomePage />
					</Suspense>
			},
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