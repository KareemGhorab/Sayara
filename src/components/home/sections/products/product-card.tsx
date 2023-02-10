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
                    group relative'
			>
				<figure
					className='
                        w-full 
                        overflow-hidden rounded'
				>
					<Image
						src={src}
						alt={title}
						width={1000}
						height={1000}
						className='
                            h-80 w-full
                            object-cover object-center
                            transition-transform
                            duration-100 group-hover:scale-110
                            sm:h-52 lg:h-72'
					/>
				</figure>
				<figcaption
					className='
                            bg-black bg-opacity-50
                            flex--centered
                            absolute top-0 right-0 left-0 bottom-0
                            font-semibold text-white text-2xl
                            group-hover:text-primary-300'
				>
					{title}
				</figcaption>
			</Link>
		</article>
	)
}
