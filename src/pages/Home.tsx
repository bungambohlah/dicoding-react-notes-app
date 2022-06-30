import { NoteListContext } from 'actions'
import Head from 'components/Head'
import Input from 'components/Input'
import NotosSection from 'components/NotosSection'
import type { ChangeEvent, FormEvent, ReactElement } from 'react'
import { useContext, useState } from 'react'
import type { INoto } from 'types'

export default function Home(): ReactElement {
	const { notes, addNoteItem, titleCharLeft, toggleCharactersLeft } =
		useContext(NoteListContext)
	const [search, setSearch] = useState('')
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')

	return (
		<>
			<Head title='Noto' />
			<main className='container mx-auto max-w-7xl px-4'>
				<section className='sticky top-16 z-50 m-4 rounded-lg bg-slate-800 p-6 shadow-2xl'>
					<h2 className='mb-6 text-2xl font-extrabold text-slate-200'>
						Search
					</h2>
					<Input
						id='search-input'
						label=''
						name='search'
						type='text'
						placeholder='Search a note'
						onChange={
							((event: ChangeEvent<HTMLInputElement>) =>
								setSearch(event.target.value)) as () => void
						}
						value={search}
					/>
				</section>
				<section>
					<h2 className='mb-6 text-2xl font-extrabold text-slate-200'>
						Create a new Note
					</h2>
					<form id='addNote'>
						<Input
							id='title-input'
							label='Insert your note title:'
							name='title'
							value={title}
							type='text'
							placeholder='Enter a title'
							onChange={
								((event: ChangeEvent<HTMLInputElement>) => {
									if (event.target.value.length <= 50) {
										toggleCharactersLeft?.(event.target.value.length)
										setTitle(event.target.value)
									} else {
										setTitle(event.target.value.slice(0, 50))
									}
								}) as () => void
							}
							helperComponent={
								<p
									id='helper-text-explanation'
									className={`mt-2 text-sm ${
										titleCharLeft < 1 ? `text-rose-500 dark:text-rose-400` : ``
									} ${
										titleCharLeft >= 1 && titleCharLeft < 15
											? `text-amber-500 dark:text-amber-400`
											: ``
									}${
										titleCharLeft >= 15
											? `text-gray-500 dark:text-gray-400`
											: ``
									}`}
								>
									{titleCharLeft < 1
										? `Max character exceeds`
										: `${titleCharLeft} characters left`}
								</p>
							}
						/>
						<Input
							id='body-input'
							label='Leave a note description:'
							name='body'
							value={body}
							type='textarea'
							rows={4}
							placeholder='Leave a description...'
							onChange={
								((event: ChangeEvent<HTMLInputElement>) =>
									setBody(event.target.value)) as () => void
							}
						/>
						<div className='mb-6'>
							<button
								type='submit'
								className='rounded-lg bg-teal-700 py-2 px-4 font-semibold text-slate-200 hover:bg-teal-800'
								onClick={
									((event: FormEvent<HTMLButtonElement>) => {
										event.preventDefault()
										const form = document.querySelector('#addNote') as
											| HTMLFormElement
											| undefined
										const data = Object.fromEntries(
											new FormData(form).entries()
										) as { title: string; body: string }
										const noto = {
											...data,
											id: Date.now(),
											createdAt: new Date().toISOString()
										} as INoto
										if (data.title) {
											addNoteItem?.(noto)
											form?.reset()
											toggleCharactersLeft?.(0)
										}
									}) as () => void
								}
							>
								Add a note
							</button>
						</div>
					</form>
				</section>
				<NotosSection
					title='Notes'
					notes={notes
						.filter(x => !x.archived)
						.filter(x =>
							search && search.length > 0
								? x.title.toUpperCase().includes(search.toUpperCase())
								: true
						)}
					noDataMessage='Notes is empty :('
				/>
				<NotosSection
					title='Archived Notes'
					notes={notes.filter(x => x.archived)}
					noDataMessage='Archived Notes is empty :('
				/>
			</main>
			<footer className='flex items-center justify-center rounded-lg bg-white p-4 p-6 shadow dark:bg-gray-800'>
				<span className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
					© {new Date().getFullYear()}{' '}
					<a href='https://afif.dev/' className='hover:underline'>
						Made with <span className='text-rose-500'>♥</span> by Afif Abdillah
						Jusuf
					</a>
					. Under MIT License.
				</span>
			</footer>
		</>
	)
}
