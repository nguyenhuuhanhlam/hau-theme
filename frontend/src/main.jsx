import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import MainLayout from './shared/components/MainLayout'
import HomePage from './features/home'

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	</BrowserRouter>,
)
