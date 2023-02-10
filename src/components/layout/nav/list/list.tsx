import cn from 'classnames'

import Button from './list-btn'
import Li from './list-item'
import type { ListItem, ListItemExpandable } from './types'
import { useToggle } from 'src/hooks/useToggle'

const list: (ListItem | ListItemExpandable)[] = [
	{ title: 'Home', href: '/' },
	{
		title: 'Categories',
		children: [
			{ title: 'Brakes', href: '/shop?category=brakes' },
			{
				title: 'Oil, Chemicals & Fluids',
				href: '/shop?category=oil-chemicals-fluids',
			},
			{ title: 'Filters', href: '/shop?category=filters' },
			{ title: 'Tires & Wheels', href: '/shop?category=tires-wheels' },
			{
				title: 'Battery & Accessories',
				href: '/shop?category=battery-accessories',
			},
			{ title: 'Gaskets', href: '/shop?category=gaskets' },
			{
				title: 'CV, Driveshaft & Axle',
				href: '/shop?category=cv-driveshaft-axle',
			},
			{
				title: 'Chassis & Steering',
				href: '/shop?category=chassis-steering',
			},
		],
	},
	{
		title: 'Contact Us',
		href: '/contact',
	},
]

interface Props {
	className?: string
}

export default function List({ className = '' }: Props) {
	const { isActive: isMenuOpen, toggle: toggleMenu } = useToggle()

	return (
		<div className={`${className}`}>
			<Button toggle={toggleMenu} className={`block md:hidden`} />
			<ul
				className={`
                flex flex-col gap-3
                md:flex md:flex-row md:items-center md:justify-center 
                ${cn({
									'block absolute': isMenuOpen,
									'hidden ': !isMenuOpen,
								})}`}
			>
				{list.map((li) => (
					<Li key={li.title} li={li} />
				))}
			</ul>
		</div>
	)
}
