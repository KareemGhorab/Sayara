import Bars from '@/components/icons/bars'

interface Props {
	toggle: () => void
	className?: string
}

export default function Button({ toggle, className = '' }: Props) {
	return (
		<button
			onClick={toggle}
			className={`
            rounded-full p-2
            hover:bg-primary-500 hover:text-white
            ${className}`}
		>
			<Bars />
		</button>
	)
}
