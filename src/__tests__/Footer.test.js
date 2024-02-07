import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { BrowserRouter } from 'react-router-dom'

describe("<Footer />", () => {
  it("renders an index link", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const indexLink = screen.getByText( 
       /remember, every paw\-sitive swipe brings us one step closer to a world ruled by cuddles and catnip! 😻/i
    )
    expect(indexLink).toBeInTheDocument()
  })
})
