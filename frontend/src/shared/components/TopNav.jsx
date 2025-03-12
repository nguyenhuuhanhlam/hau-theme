import LogoHAU from '../../assets/logo-HAU.svg'
import LogoKKT from '../../assets/logo-KKT.svg'

const TopNav = () => {
	return (
		<div className="flex p-4 gap-4 items-center">
			<div className="flex gap-2 h-14">
				<img src={LogoHAU} />
				<img src={LogoKKT} />
			</div>
			<div className="flex gap-2">
				<div>ITEM-1</div>
				<div>ITEM-2</div>
				<div>ITEM-3</div>
			</div>
			<div>
				SEARCH!
			</div>
		</div>
	)
}

export default TopNav