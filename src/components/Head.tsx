import { useEffect } from 'react'

interface Properties {
	title: string
}
export default function Head({ title }: Properties): JSX.Element {
	useEffect(() => {
		document.title = title
	}, [title])

	// eslint-disable-next-line unicorn/no-null
	return (
		<div className='m-4 flex justify-center text-center text-4xl font-extrabold text-slate-100'>
			~ {title} ~
		</div>
	)
}
