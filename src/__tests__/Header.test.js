import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom'

describe("<Header />", () => {
  it("renders an index link", () => {
  
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
   
     screen.logTestingPlaygroundURL()
   
    const indexLink = screen.getByRole('heading', {
  name: /welcome to purrfect matches! 🐾/i
})
    
    expect(indexLink).toBeInTheDocument()
  })


})