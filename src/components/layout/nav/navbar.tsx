import Logo from '../../logo/logo'
import Auth from './auth/auth'
import List from './list/list'

export default function Navbar() {
	return (
		<nav className='mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4'>
			<Logo className='order-2 text-5xl md:order-1' />
			<List className='order-1 md:order-2' />
			<Auth className='order-3' />
		</nav>
	)
}
