import {render, screen} from "@testing-library/react"
import Page from "./page"

test('renders analytics page', () => {
  render(<Page />)

  expect(screen.getByText(/analytics/i)).toBeInTheDocument()
})