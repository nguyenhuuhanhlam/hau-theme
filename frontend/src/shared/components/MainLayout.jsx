import { Outlet } from 'react-router-dom'
import TopNav from './TopNav'
import Footer from './Footer'

const MainLayout = () => {
	return (
		<>
			<TopNav />
			<div>SLIDE</div>
			<div>
				<Outlet />
			</div>
			<Footer />
		</>
	)
}

export default MainLayout