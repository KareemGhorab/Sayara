import Image from 'next/image'
import Link from 'next/link'
import type { ProductItem } from './types'

interface Props {
	item: ProductItem
	className?: string
}

export default function ProductCard({
	item: { title, src, href },
	className = '',
}: Props) {
	return (
		<article className={`${className}`}>
			<Link
				href={href}
				className='
                    group hover:text-primary-500'
			>
				<div className='flex--centered flex-col'>
					<figure
						className='
                            overflow-hidden rounded-xl'
					>
						<Image
							src={src}
							alt={title}
							width={1000}
							height={1000}
							className='
                                object-cover object-center
                                group-hover:scale-110
                                transition-transform duration-100
                                w-96 h-80'
						/>
					</figure>
					<div className='my-2'></div>
					<p
						className='
                        text-2xl 
                        font-bold'
					>
						{title}
					</p>
				</div>
			</Link>
		</article>
	)
}
