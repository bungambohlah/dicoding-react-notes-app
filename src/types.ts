export interface INoto {
	id: number
	title: string
	body: string
	archived: boolean
	createdAt: string
}

export interface NotoListProperties {
	noto?: INoto
	index: number
	noListText?: string
}

export interface ProviderProperties {
	children?: React.ReactNode
}

export interface IState {
	notes: INoto[]
	titleCharLeft: number
}

export interface IContextProperties extends IState {
	addNoteItem?: (note: INoto) => void
	removeNoteItem?: (notoId: INoto['id']) => void
	toggleArchived?: (notoId: INoto['id']) => void
	toggleCharactersLeft?: (titleCharLeft: IState['titleCharLeft']) => void
}

export interface IAction {
	type: string
}
export interface IActionAddNoteItem extends IAction {
	note: INoto
}
export interface IActionRemoveNoteItem extends IAction {
	notoId: INoto['id']
}
export interface IActionToggleNoteItem extends IAction {
	notoId: INoto['id']
}
export interface IActionToggleCharLeft extends IAction {
	titleCharLeft: IState['titleCharLeft']
}
