import { Carousel } from 'react-responsive-carousel'

import type { CarouselItem } from './types'
import CarouselImage from './carousel-image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const list: CarouselItem[] = [
	{ src: '/hero-1.jpg', alt: 'silver gears' },
	{ src: '/hero-2.jpg', alt: 'car engine' },
	{ src: '/hero-3.jpg', alt: 'silver stainless steel engine' },
]

interface Props {
	className?: string
}

export default function HeroCarousel({ className = '' }: Props) {
	return (
		<Carousel
			autoPlay
			infiniteLoop
			showIndicators={false}
			showStatus={false}
			showThumbs={false}
			showArrows={false}
			className={`${className}`}
		>
			{list.map((ci) => (
				<CarouselImage key={ci.src} {...ci} />
			))}
		</Carousel>
	)
}
