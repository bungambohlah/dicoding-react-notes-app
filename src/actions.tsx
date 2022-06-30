import getNotes from 'api/getNotes'
import type { ReactElement } from 'react'
import { createContext, useReducer } from 'react'
import reducer from 'reducer'
import type {
	IActionAddNoteItem,
	IActionRemoveNoteItem,
	IActionToggleCharLeft,
	IActionToggleNoteItem,
	IContextProperties,
	INoto,
	IState,
	ProviderProperties
} from 'types'

// Initial State and Actions
export const initialState: IState = {
	notes: getNotes(),
	titleCharLeft: 50
}

export const actions = {
	ADD_NOTE_ITEM: 'ADD_NOTE_ITEM',
	REMOVE_NOTE_ITEM: 'REMOVE_NOTE_ITEM',
	TOGGLE_ARCHIVED: 'TOGGLE_ARCHIVED',
	TOGGLE_CHARACTERS_LEFT: 'TOGGLE_CHARACTERS_LEFT'
}

export const NoteListContext = createContext<IContextProperties>(initialState)

export function Provider({ children }: ProviderProperties): ReactElement {
	const [state, dispatch] = useReducer(reducer, initialState) as [
		IState,
		React.Dispatch<
			| IActionAddNoteItem
			| IActionRemoveNoteItem
			| IActionToggleCharLeft
			| IActionToggleNoteItem
		>
	]
	const { Provider: NoteProvider } = NoteListContext

	const value = {
		notes: state.notes,
		titleCharLeft: state.titleCharLeft,
		addNoteItem: (note: INoto) => {
			dispatch({
				type: actions.ADD_NOTE_ITEM,
				note
			})
		},
		removeNoteItem: (notoId: INoto['id']) => {
			dispatch({ type: actions.REMOVE_NOTE_ITEM, notoId })
		},
		toggleArchived: (notoId: INoto['id']) => {
			dispatch({ type: actions.TOGGLE_ARCHIVED, notoId })
		},
		toggleCharactersLeft: (titleCharLeft: IState['titleCharLeft']) => {
			dispatch({ type: actions.TOGGLE_CHARACTERS_LEFT, titleCharLeft })
		}
	} as IContextProperties

	return <NoteProvider value={value}>{children}</NoteProvider>
}
