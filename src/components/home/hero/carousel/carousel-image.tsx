import Image from 'next/image'

import type { CarouselItem } from './types'

export default function CarouselImage({ src, alt }: CarouselItem) {
	return (
		<Image
			className='h-screen object-cover object-center'
			src={src}
			alt={alt}
			width={1920}
			height={1080}
		/>
	)
}
