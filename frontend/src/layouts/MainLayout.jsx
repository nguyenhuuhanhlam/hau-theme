import { Outlet } from 'react-router-dom'

import TopNav from './components/top-nav'
import Footer from './components/footer'

const MainLayout = () => {
	return (
		<div>
			<div className="sticky top-0 z-50 bg-white border-b border-stone-100">
				<div className="max-w-[960px] mx-auto">
					<TopNav />
				</div>
			</div>

			<div className="max-w-[960px] mx-auto">
				<Outlet />
			</div>

			<div className="bg-neutral-800">
				<div className="max-w-[960px] mx-auto">
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default MainLayout