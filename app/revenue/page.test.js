import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Page from "./page"

test('renders revenue page', () => {
  render(<Page />)

  const withdrawButton = screen.getByRole('button', {name: /withdraw/i})
  expect(withdrawButton).toBeInTheDocument()
})

test('filter activates when filter button is clicked', () => {
  const { queryByTestId, queryByText } = render(<Page />)

  const filterButton = queryByTestId('filter-button')
  userEvent.click(filterButton)

  const filterComponent = queryByTestId('filter-component')
  expect(filterComponent).toBeInTheDocument()
})