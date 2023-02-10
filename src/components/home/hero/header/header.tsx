import Logo from '@/components/logo/logo'

interface Props {
	className?: string
}

export default function Header({ className = '' }: Props) {
	return (
		<section
			className={`
                flex--centered absolute 
                top-0 right-0 left-0 bottom-0
                z-10 flex-col bg-black
                bg-opacity-80
                ${className}`}
		>
			<Logo
				className={`
                    text-7xl md:text-8xl lg:text-9xl xl:text-10xl`}
			/>
			<p
				className='
                    text-lg font-semibold
                    text-white md:text-xl lg:text-2xl xl:text-3xl'
			>
				Premium car parts for all models
			</p>
		</section>
	)
}
