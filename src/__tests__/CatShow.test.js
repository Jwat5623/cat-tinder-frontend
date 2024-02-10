import { render, screen } from "@testing-library/react"
import CatShow from "../pages/CatShow"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockCats from "../mockCats.js"

describe("<CatShow />", () => {
  it("renders one cat", () => {
    const cat = "1"
    render(
      <MemoryRouter initialEntries={[`/catshow/${cat}`]}>
        <Routes>
          <Route path="/catshow/:id" element={<CatShow cats={mockCats} />} />
        </Routes>
      </MemoryRouter>
    )
    const catName = screen.getByText(/name:oscar/i)
    expect(catName).toBeInTheDocument()
    const catAge = screen.getByText(/age: 5/i)
    expect(catAge).toBeInTheDocument()
    const catEnjoys = screen.getByText(
      /swipe right if youre feline fine and ready to mingle! im a whisker\-twitching aficionado of belly rubs and cardboard boxes, seeking a purr\-fect partner for lazy afternoons and midnight zoomies\./i
      )
    expect(catEnjoys).toBeInTheDocument()
  })
})
