import { actions, initialState } from 'actions'
import {
	IAction,
	IActionAddNoteItem,
	IActionRemoveNoteItem,
	IActionToggleCharLeft,
	IActionToggleNoteItem,
	IContextProps
} from 'types'

//Reducer to Handle Actions
export default function reducer(
	state: IContextProps,
	action: IAction
): IContextProps {
	switch (action.type) {
		case actions.ADD_NOTE_ITEM: {
			const { note } = action as IActionAddNoteItem
			return {
				...state,
				notes: [
					...state.notes,
					{
						id: new Date().valueOf(),
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
