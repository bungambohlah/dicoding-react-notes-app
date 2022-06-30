import { actions, initialState } from 'actions'
import type {
	IAction,
	IActionAddNoteItem,
	IActionRemoveNoteItem,
	IActionToggleCharLeft,
	IActionToggleNoteItem,
	IContextProperties
} from 'types'

// Reducer to Handle Actions
export default function reducer(
	state: IContextProperties,
	action: IAction
): IContextProperties {
	switch (action.type) {
		case actions.ADD_NOTE_ITEM: {
			const { note } = action as IActionAddNoteItem
			return {
				...state,
				notes: [
					...state.notes,
					{
						id: Date.now(),
						title: note.title,
						body: note.body,
						archived: note.archived,
						createdAt: new Date().toISOString()
					}
				]
			}
		}
		case actions.REMOVE_NOTE_ITEM: {
			const { notoId } = action as IActionRemoveNoteItem
			const filteredNoteItem = state.notes.filter(
				noteItem => noteItem.id !== notoId
			)
			return { ...state, notes: filteredNoteItem }
		}
		case actions.TOGGLE_ARCHIVED: {
			const { notoId } = action as IActionToggleNoteItem
			const updatedNotes = state.notes.map(noteItem =>
				noteItem.id === notoId
					? { ...noteItem, archived: !noteItem.archived }
					: noteItem
			)
			return { ...state, notes: updatedNotes }
		}
		case actions.TOGGLE_CHARACTERS_LEFT: {
			const { titleCharLeft } = action as IActionToggleCharLeft
			const lefts = initialState.titleCharLeft - titleCharLeft
			return { ...state, titleCharLeft: lefts }
		}
		default: {
			return state
		}
	}
}
