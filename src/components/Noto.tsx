import { NoteListContext } from 'actions'
import type { ReactElement } from 'react'
import { useContext } from 'react'
import type { NotoListProperties } from 'types'

export default function Noto({
	noto,
	noListText
}: NotoListProperties): ReactElement {
	const { removeNoteItem, toggleArchived } = useContext(NoteListContext)

	if (noto)
		return (
			<div className='relative flex h-full w-full select-none flex-col gap-4 overflow-hidden rounded-lg bg-slate-900 p-4 shadow-lg focus:border-gray-300 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 dark:shadow-2xl md:p-6'>
				{/* card header */}
				<header className='text-xl font-extrabold'>{noto.title}</header>
				<p>{noto.body}</p>
				<p data-testid='NotoCardName' className='text-md px-6' />
				{/* card footer */}
				<footer className='mt-auto flex items-center gap-4'>
					<button
						type='button'
						className={`rounded-lg py-2 px-4 font-semibold text-slate-200 ${
							noto.archived
								? `bg-cyan-600 hover:bg-cyan-700`
								: `bg-amber-600 hover:bg-amber-700`
						}`}
						onClick={(() => toggleArchived?.(noto.id)) as () => void}
					>
						{noto.archived ? `Buka Arsip` : `Arsipkan`}
					</button>
					<button
						type='button'
						className='rounded-lg bg-rose-700 py-2 px-4 font-semibold text-slate-200 hover:bg-rose-800'
						onClick={(() => removeNoteItem?.(noto.id)) as () => void}
					>
						Hapus
					</button>
				</footer>
			</div>
		)

	return <p className='text-md px-6'>{noListText ?? `No data found`}</p>
}
