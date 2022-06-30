import React from 'react'

export const Input: React.FC<{
	id: string
	label: string
	name: string
	value: string
	type: string
	maxLength?: number
	placeholder?: string
	onChange?: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void
	helperComponent?: React.ReactNode
	rows?: number
}> = ({
	id,
	label,
	name,
	type,
	maxLength,
	placeholder,
	onChange,
	helperComponent,
	rows,
	value
}) => {
	if (type === 'textarea') {
		return (
			<div className='mb-6'>
				<label
					htmlFor='body-input'
					className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
				>
					{label}
				</label>
				<textarea
					id='body-input'
					name='body'
					className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
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
				className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
			>
				{label}
			</label>
			<input
				name={name}
				type={type}
				id={id}
				className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
				maxLength={maxLength}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
			{helperComponent && helperComponent}
		</div>
	)
}
