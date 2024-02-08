import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import toastKitty from "./assets/cat-home.png"

describe("<App />", () => {
  it("renders an image", () => {
    Arrange
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  
    Act
    const image = screen.getByRole('img', {
      name: /toast kitty hard at work/i
    })
    Assert
    expect(image).toHaveAttribute("src", toastKitty)
  })

  it("renders an nav list", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })
})














