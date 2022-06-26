import type { ReactElement } from 'react'
import type { NotoListProperties } from 'types'

export default function Noto({ noto }: NotoListProperties): ReactElement {
	return (
		<div
			data-testid='NotoCard'
			className='cursor-pointer select-none overflow-hidden rounded-lg shadow-lg focus:border-gray-300 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 dark:shadow-2xl'
			role='button'
			tabIndex={0}
		>
			<h3 data-testid='NotoCardName' className='p-6 text-xl font-bold'>
				{noto.name}
			</h3>
		</div>
	)
}
