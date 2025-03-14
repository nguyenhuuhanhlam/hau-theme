import { Link } from 'react-router'

import LogoHAU from '../../assets/logo-HAU.svg'
import LogoKKT from '../../assets/logo-KKT.svg'

import ExpandableSearchButton from './Search'

const TopNav = () => {
	return (
		<div className="flex py-4 gap-4 items-center">
			<div className="flex gap-2 pl-4 md:px-0">
				<Link to="/" className="h-12"><img src={LogoHAU} alt="HAU Logo" className="h-12" /></Link>
				<Link to="/" className="h-12"><img src={LogoKKT} alt="KKT Logo" className="h-12" /></Link>
			</div>

			<div className="flex gap-4 ml-auto items-center">
				<div className="hidden md:flex gap-3 text-[10px]">
					<div><Link to="/introduction">GIỚI THIỆU</Link></div>
					<div><Link to="/training">ĐÀO TẠO</Link></div>
					<div><Link to="/students">SINH VIÊN</Link></div>
					<div><Link to="/activities">HOẠT ĐỘNG KHOA</Link></div>
					<div><Link to="/cooperation">HỢP TÁC - KẾT NỐI</Link></div>
					<div><Link to="/news">TIN TỨC</Link></div>
					<div><Link to="/internal">NỘI BỘ</Link></div>
				</div>
				<div className="text-xs">
					<ExpandableSearchButton />
				</div>
			</div>

			<div className="md:hidden pr-4">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
			</div>
		</div>
	)
}

export default TopNav