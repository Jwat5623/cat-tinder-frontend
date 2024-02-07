import { render, screen } from "@testing-library/react"
import NotFound from "../pages/NotFound"
import { BrowserRouter } from 'react-router-dom'

describe("<NotFound />", () => {
  it("renders an index link", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const indexLink = screen.getByText( 
       "We're sorry, but it seems like you've strayed into the land of lost socks instead of meeting a purr-fect match! Our kitties are busy sharpening their claws or napping in sunbeams. Meow Meow!😿"
    )
    expect(indexLink).toBeInTheDocument()
  })
})
