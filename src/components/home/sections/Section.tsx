interface Props {
	title: string
	children: JSX.Element
	className?: string
}

export default function Section({ title, children, className = '' }: Props) {
	return (
		<>
			<section
				className={` 
                flex--centered flex-col
                ${className}`}
			>
				<header>
					<h2
						className={`
                            text-3xl font-bold md:text-4xl
                            xl:text-5xl`}
					>
						{title}
					</h2>
					<div
						className={`
                            mx-auto mt-3 h-1 w-20
                            bg-primary-500`}
					></div>
				</header>
				<div className='my-10'></div>
				{children}
			</section>
		</>
	)
}
