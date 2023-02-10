import Link from 'next/link'
import { type ListItem, type ListItemExpandable, isExpandable } from './types'
import ChevronDown from '@/components/icons/chevron-down'

interface Props {
	li: ListItem | ListItemExpandable
}

export default function Li({ li }: Props) {
	return (
		<li className='font-semibold hover:text-primary-500'>
			{isExpandable(li) ? (
				<div className='flex items-center gap-1 cursor-pointer'>
					{li.title}
					<ChevronDown className='h-4 w-4' />
				</div>
			) : (
				<Link href={li.href}>{li.title}</Link>
			)}
		</li>
	)
}
