import type { Params } from "@/interfaces"

export const useParams = () => {
	return useState<Params>('params', () => ({
		nums: 0,
		curr: 0,
		prev: 0,
		equa: 0,
		calc: null,
		message: '0'
	}))
}
