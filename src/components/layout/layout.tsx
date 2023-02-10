import Footer from './footer/footer'
import Navbar from './nav/navbar'

interface Props {
	children: JSX.Element
}

export default function Layout({ children }: Props) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}
