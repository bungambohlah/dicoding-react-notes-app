import React from 'react'
import { INoto } from 'types'
import Noto from './Noto'

export const NotosSection: React.FC<{
	notes: INoto[]
	title: string
	noDataMessage?: string
}> = ({ title, notes, noDataMessage }) => {
	return (
		<section>
			<h3 className='mt-10 mb-6 text-2xl font-extrabold text-slate-300'>
				{title}
			</h3>
			{(notes.length && (
				<div className='m-4 grid flex-auto grid-cols-[minmax(0,384px)] place-content-center gap-4 md:m-0 md:grid-cols-[repeat(2,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]'>
					{notes.map((noto, index) => (
						<Noto key={`Noto-${noto.id}`} noto={noto} index={index} />
					))}
				</div>
			)) || (
				<span className='text-md m-4 flex flex-auto items-center text-gray-500 dark:text-gray-400 sm:text-center'>
					{noDataMessage ? noDataMessage : `Data is empty :(`}
				</span>
			)}
		</section>
	)
}
