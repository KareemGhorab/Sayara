import ProductCard from './product-card'
import type { ProductItem } from './types'

interface Props {
	className?: string
}

//TODO fetch from API
const list: ProductItem[] = [
	{
		title: 'Car Breaks',
		src: '/category-breaks.jpg',
		href: '/shop?category=brakes',
	},
	{
		title: 'Oil, Chemicals & Fluids',
		src: '/category-oil.jpg',
		href: '/shop?category=oil-chemicals-fluids',
	},
	{
		title: 'Filters',
		src: '/category-filters.jpg',
		href: '/shop?category=filters',
	},
	{
		title: 'Tires & Wheels',
		src: '/category-tires.jpg',
		href: '/shop?category=tires-wheels',
	},
	{
		title: 'Battery & Accessories',
		src: '/category-batteries.jpg',
		href: '/shop?category=battery-accessories',
	},
	{
		title: 'Chassis & Steering',
		src: '/category-chassis.jpg',
		href: '/shop?category=chassis-steering',
	},
]

export default function Products({ className = '' }: Props) {
	return (
		<div
			className={`
                grid max-w-7xl gap-10
                px-10
                md:grid-cols-2 lg:grid-cols-3
                ${className}`}
		>
			{list.map((product) => (
				<ProductCard key={product.title} item={product} />
			))}
		</div>
	)
}
