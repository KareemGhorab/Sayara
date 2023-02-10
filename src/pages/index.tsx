import HeroCarousel from '@/components/home/hero/carousel/carousel'
import Header from '@/components/home/hero/header/header'
import Section from '@/components/home/sections/Section'
import Products from '@/components/home/sections/products/products'
import { type NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<>
			<main className='grid gap-20'>
				<header>
					<Header />
					<HeroCarousel />
				</header>
				<Section title='Automobile Parts'>
					<Products />
				</Section>
			</main>
		</>
	)
}

export default Home
