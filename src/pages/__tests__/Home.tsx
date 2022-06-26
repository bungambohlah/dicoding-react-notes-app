import { screen } from '@testing-library/react'
import Home from 'pages/Home'
import renderWithProviders, {
	MOBILE_RESOLUTION_HEIGHT,
	MOBILE_RESOLUTION_WIDTH
} from 'testUtils'

async function renderHome(): Promise<void> {
	renderWithProviders(<Home />)
}

describe('<Home />', () => {
	it('renders', async () => {
		await renderHome()
		expect(screen.getByText('Babel')).toBeInTheDocument()
	})
	it('renders with mobile resolution', async () => {
		window.resizeTo(MOBILE_RESOLUTION_WIDTH, MOBILE_RESOLUTION_HEIGHT)
		await renderHome()
		expect(screen.getByText('Babel')).toBeInTheDocument()
	})
})
