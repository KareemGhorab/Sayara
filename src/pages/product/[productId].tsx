import { type NextRouter, useRouter } from 'next/router'

export default function Product() {
	const router: NextRouter = useRouter()
	const { productId } = router.query

	return <div>{productId}</div>
}
