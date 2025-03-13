import { Outlet } from 'react-router-dom'
import TopNav from './TopNav'
import Footer from './Footer'

const MainLayout = () => {
	return (
		<div>
			<div className="border-b border-stone-100">
				<div className="max-w-[960px] mx-auto">
					<TopNav />
				</div>
			</div>

			<div className="max-w-[960px] mx-auto">
				<Outlet />
			</div>

			<div className="border-t border-stone-100">
				<div className="max-w-[960px] mx-auto">
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default MainLayout