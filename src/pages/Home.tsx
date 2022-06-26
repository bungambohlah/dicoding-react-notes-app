import getNotes from 'api/getNotes'
import Head from 'components/Head'
import Noto from 'components/Noto'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import type { INoto } from 'types'

export default function Home(): ReactElement {
	const [notes, setNotes] = useState<INoto[]>([])

	useEffect(() => {
		setNotes(() => getNotes())

		return () => {
			setNotes([])
		}
	}, [])

	return (
		<>
			<Head title='Noto' />
			<div className='m-2 grid min-h-screen grid-cols-[minmax(0,384px)] place-content-center gap-2 md:m-0 md:grid-cols-[repeat(2,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]'>
				{notes.map((noto, index) => (
					<Noto key={`Noto-${noto.name}`} noto={noto} index={index} />
				))}
			</div>
		</>
	)
}
