import User from '@/components/icons/user'

interface Props {
	className?: string
}

export default function Auth({ className = '' }: Props) {
	return (
		<div className={`${className}`}>
			<User className='h-8 w-8' />
		</div>
	)
}
