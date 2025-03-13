import { Link } from 'react-router'

import LogoHAU from '../../assets/logo-HAU.svg'
import LogoKKT from '../../assets/logo-KKT.svg'

import ExpandableSearchButton from './Search'

const TopNav = () => {
	return (
		<div className="flex py-4 gap-4 items-center">
			<div className="flex gap-2 h-12">
				<img src={LogoHAU} />
				<img src={LogoKKT} />
			</div>

			<div className="flex gap-8 ml-auto items-center">
				<div className="hidden md:flex gap-2 text-xs">
					<div><Link to="">GIỚI THIỆU</Link></div>
					<div><Link to="">ĐÀO TẠO</Link></div>
					<div><Link to="">SINH VIÊN</Link></div>
					<div><Link to="">HOẠT ĐỘNG KHOA</Link></div>
					<div><Link to="">HỢP TÁC - KẾT NỐI</Link></div>
					<div><Link to="">TIN TỨC</Link></div>
					<div><Link to="">NỘI BỘ</Link></div>
				</div>
				<div className="text-xs">
					<ExpandableSearchButton />
				</div>
			</div>

			<div className="md:hidden">MNU</div>
		</div>
	)
}

export default TopNav