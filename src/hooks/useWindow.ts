import { useState, useEffect } from "react"

function getWindowDimensions() {
	if (typeof window === "undefined") return { width: 0, height: 0 }
	const { innerWidth: width, innerHeight: height } = window
	return {
		width,
		height,
	}
}

export default function useWindow() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	)
	const [windowScroll, setWindowScroll] = useState(0)

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	useEffect(() => {
		window.addEventListener("scroll", () => setWindowScroll(window.scrollY))
	})

	return { windowDimensions, windowScroll }
}
