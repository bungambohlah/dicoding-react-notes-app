import type React from 'react'

export interface InputProperties {
	id: string
	label: string
	name: string
	value: string
	type: string
	placeholder?: string
	onChange?: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void
	helperComponent?: React.ReactNode
	rows?: number
}

export default function Input({
	id,
	label,
	name,
	type,
	placeholder,
	onChange,
	helperComponent,
	rows,
	value
}: InputProperties): JSX.Element {
	if (type === 'textarea') {
		return (
			<div className='mb-6'>
				<label
					htmlFor='body-input'
					className='mb-2 block text-sm font-medium text-gray-300'
				>
					{label}
				</label>
				<textarea
					id='body-input'
					name='body'
					className='block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500'
					placeholder={placeholder}
					rows={rows}
					onChange={onChange}
					value={value}
				/>
			</div>
		)
	}
	return (
		<div className='mb-6'>
			<label
				htmlFor={id}
				className='mb-2 block text-sm font-medium text-gray-300'
			>
				{label}
			</label>
			<input
				name={name}
				type={type}
				id={id}
				className='block w-full rounded-lg border border-gray-600  bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500'
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
			{helperComponent ?? undefined}
		</div>
	)
}

Input.defaultProps = {
	placeholder: '',
	onChange: undefined,
	helperComponent: undefined,
	rows: undefined
}
