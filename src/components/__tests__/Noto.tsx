import { render, screen } from '@testing-library/react'
import notos from 'mocks/data/data.json'
import type ReactRouterDOM from 'react-router-dom'
import Noto from '../Noto'

const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => ({
	...(await vi.importActual<typeof ReactRouterDOM>('react-router-dom')),
	useNavigate: (): typeof mockNavigate => mockNavigate
}))

function renderNoto(): void {
	render(<Noto noto={notos[0]} index={0} />)
}

describe('<Noto />', () => {
	it('renders', () => {
		renderNoto()
		expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument()
	})
})
