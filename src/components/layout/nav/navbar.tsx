import cn from 'classnames'
import useWindow from 'src/hooks/useWindow'
import Logo from '../../logo/logo'
import Auth from './auth/auth'
import List from './list/list'

const navBgChangePoint = 100

export default function Navbar() {
	const { windowScroll } = useWindow()

	return (
		<div
			className={`fixed z-50 
            flex w-full justify-center
            ${cn({
							'bg-white text-black': windowScroll > navBgChangePoint,
							'bg-transparent text-white': windowScroll <= navBgChangePoint,
						})}`}
		>
			<nav
				className={`
                flex w-full
                max-w-7xl items-center justify-between
                gap-4 px-5 py-4 `}
			>
				<Logo className='order-2 text-5xl md:order-1' />
				<List className='order-1 md:order-2' />
				<Auth className='order-3' />
			</nav>
		</div>
	)
}
