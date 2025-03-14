import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MainLayout from './shared/components/MainLayout'
import HomePage from './features/home'
import News from './features/news'

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path="news">
					<Route index element={<News />} />
					<Route path=":type" element={<News />} />
				</Route>
			</Route>
		</Routes>
	</BrowserRouter>,
)
