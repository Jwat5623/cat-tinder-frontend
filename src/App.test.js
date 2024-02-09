import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import cat from "./assets/cat.png"

describe("<App />", () => {
  it("renders an image", () => {
    // Arrange
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const image = screen.getByRole('img', {
      name: /cat on boots/i
    })
    expect(image).toHaveAttribute("src", cat)
  })

  it("renders an nav list", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const list = screen.getByRole('link', { name: /lists/i })
    expect(list).toBeInTheDocument()
  })
})