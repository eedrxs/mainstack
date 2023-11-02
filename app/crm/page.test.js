import {render, screen} from "@testing-library/react"
import Page from "./page"

test('renders crm page', () => {
  render(<Page />)

  const withdrawButton = screen.getByText(/crm/i)
})