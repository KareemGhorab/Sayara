export interface ListItem {
	title: string
	href: string
}

export interface ListItemExpandable {
	title: string
	children: ListItem[]
}

export const isExpandable = (
	listItem: ListItem | ListItemExpandable
): listItem is ListItemExpandable => {
	return 'children' in listItem
}
