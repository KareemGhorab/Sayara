import localFont from '@next/font/local'

const sayaraFont = localFont({
	src: '../../assets/fonts/sayara/sayara.ttf',
	variable: '--font-sayara',
})

interface Props {
	className?: string
}

export default function Logo({ className = '' }: Props) {
	return (
		<h1
			className={`${sayaraFont.variable} font-sayara text-primary-500 ${className}`}
		>
			Sayara
		</h1>
	)
}
