import HeroCarousel from '@/components/home/hero/carousel/carousel'
import Header from '@/components/home/hero/header/header'
import { type NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<main>
			<header>
				<Header />
				<HeroCarousel />
			</header>
		</main>
	)
}

export default Home
