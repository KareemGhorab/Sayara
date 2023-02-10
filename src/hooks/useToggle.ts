import { useState } from 'react'

export const useToggle = (initialState = false) => {
	const [isActive, setIsActive] = useState(initialState)

	return {
		isActive,
		toggle: () => setIsActive((prevState) => !prevState),
		activate: () => setIsActive(true),
		deactivate: () => setIsActive(false),
	}
}
