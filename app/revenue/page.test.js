import {render, screen} from "@testing-library/react"
import Page from "./page"

test('renders revenue page', () => {
  render(<Page />)

  const withdrawButton = screen.getByRole('button')
})