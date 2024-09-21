import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../components/Body"
import MOCK_DATA from "../mocks/MOCresListData.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


//async operation so it gives error use act so' we are using act Function
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=> {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it('should search Reslist Burger test Input',async()=>{
    await act(async () => render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>))

    //cards before Search 
    const beforeSearchCards = screen.getAllByTestId("resCard");
    expect(beforeSearchCards.length).toBe(20);

    const searchBtn = screen.getByRole("button",{name : "Search"})

    const searchInput = screen.getByTestId("serchinput");
    
    fireEvent.change(searchInput,{target : { value:"pizza" }});

    fireEvent.click(searchBtn);

    //resturant card is nothing but A div
    const cards = screen.getAllByTestId("resCard");
    
    expect(cards.length).toBe(2);
    
})

it('should top rated resturant',async()=>{
    await act(async () => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
))
const topRatedResButton = screen.getByTestId("filterbtn",{name : "top Resturants"});

fireEvent.click(topRatedResButton);

const topResturants = screen.getAllByTestId("resCard");

expect(topResturants.length).toBe(14);
// expect(topRatedResButton).toBeInTheDocument();
})