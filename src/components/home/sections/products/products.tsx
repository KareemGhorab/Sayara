import ProductCard from './product-card'
import type { ProductItem } from './types'

interface Props {
	className?: string
}

//TODO fetch from API
const list: ProductItem[] = [
	{
		title: 'Car Brakes',
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
                grid w-full max-w-7xl grid-cols-1 
                gap-3 px-10
                sm:grid-cols-10
                ${className}`}
		>
			{list[0] && <ProductCard item={list[0]} className='sm:col-span-6' />}
			{list[1] && <ProductCard item={list[1]} className='sm:col-span-4' />}
			{list[2] && <ProductCard item={list[2]} className='sm:col-span-2' />}
			{list[3] && <ProductCard item={list[3]} className='sm:col-span-5' />}
			{list[4] && <ProductCard item={list[4]} className='sm:col-span-3' />}
		</div>
	)
}
