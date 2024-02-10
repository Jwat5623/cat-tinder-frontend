import { render, screen } from "@testing-library/react"
import CatNew from "../pages/CatNew"
import { BrowserRouter } from "react-router-dom"

describe("<CatNew />", () => {
  it("renders a new cat", () => {
    render(
      <BrowserRouter>
        <CatNew />
      </BrowserRouter>
    )

    expect(screen.getByText("Add Your Info To Make New Friends")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Enter Your Cat's Name")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Enter Your Cat's Age")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Enter What Your Cat Likes To Do")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Enter the URL of Your Cat's Image")).toBeInTheDocument()
    expect(screen.getByText("Submit Cat")).toBeInTheDocument() 
  })
})