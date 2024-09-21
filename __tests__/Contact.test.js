import { render,screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom"

describe('Contact us page it Cases', () => {
 
// afterAll(()=>{
//         console.log("after all");
        
//    })
//    afterEach(()=>{
//         console.log("after Each");
        
//    })   
it('should show butotn', () => {
   
    render(<Contact/>)
   
    const button = screen.getByRole("button");
   
    expect(button).toBeInTheDocument();
})

it('should show me a botton',()=> {
    render(<Contact/>)
    //queriing
    const button = screen.getByPlaceholderText("Name");
    //assertion
    expect(button).toBeInTheDocument();
})

it('should input buttons 2 ',() => {
    render(<Contact/>)

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
    })
});

