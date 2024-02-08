// Create a test for the Home page that ensures the component will render to the browser.
import { render, screen } from "@testing-library/react"
import Home from "../pages/Home"
import { BrowserRouter } from 'react-router-dom'

describe("<Home />", () => {
  it("renders an index link", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const indexLink = screen.getByText( 
       /Let the purr-fect match-making begin! 🐈💕/i
    )
    expect(indexLink).toBeInTheDocument()
  })
})
