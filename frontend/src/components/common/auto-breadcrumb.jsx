import { Fragment } from 'react'

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const AutoBreadCrumb = ({ items = [] }) => {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				{items.map((item, index) => {
					const isLast = index === items.length - 1
					return (
						<Fragment key={index}>
							<BreadcrumbItem>
								{
									!isLast
										? <BreadcrumbLink href={item?.href ?? '/'}>{item?.text ?? '+'}</BreadcrumbLink>
										: <BreadcrumbPage >{item?.text ?? '+'}</BreadcrumbPage>
								}
							</BreadcrumbItem>
							{
								!isLast
									? <BreadcrumbSeparator />
									: null
							}
						</Fragment>
					)
				})}
			</BreadcrumbList>
		</Breadcrumb>
	)
}

export default AutoBreadCrumb