export interface INoto {
	id: number
	name: string
	title: string
	body: string
	archived: boolean
	createdAt: string
}

export interface NotoListProperties {
	noto: INoto
	index: number
}
