import type { INoto } from 'types'
import data from './data.json'

export default function getNotes(): INoto[] {
	const response = data as INoto[]
	return response
}
