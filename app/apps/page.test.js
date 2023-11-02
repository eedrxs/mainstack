import {render, screen} from "@testing-library/react"
import Page from "./page"

test('renders apps page', () => {
  render(<Page />)

  expect(screen.getByText(/apps/i)).toBeInTheDocument()
})