import type { Params } from "@/interfaces"

export const useParams = () => {
	return useState<Params>('params', () => ({
		curr: 0,
		prev: 0,
		equa: false,
		calc: null,
		message: '0'
	}))
}
