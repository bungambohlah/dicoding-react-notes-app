import { screen } from '@testing-library/react'
import App from 'App'
import renderWithProviders from 'testUtils'

describe('<App />', () => {
	it('renders', async () => {
		window.history.pushState({}, 'Home', '/')
		renderWithProviders(<App />, false)

		expect(screen.getByText('Loading...')).toBeInTheDocument()
		await expect(screen.findByText('Babel')).resolves.toBeInTheDocument()
	})
})
