import { render, screen } from "@testing-library/react"
import Resturantcard from "../components/Resturantcard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it('should render resturant card',()=>{

    render(<Resturantcard resData={MOCK_DATA}/>)

    const available = screen.getByText("La Pino'z Pizza")
    
    expect(available).toBeInTheDocument();
})
it('should render resturant card width promoted label',()=>{
    
    render(<Resturantcard resData={MOCK_DATA}/>)

    const available = screen.getByText("La Pino'z Pizza")
    
    expect(available).toBeInTheDocument();
})