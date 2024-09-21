import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"
import appStore from "../utils/appStore"
import "@testing-library/jest-dom"


test('should have header login button', () => {
    render(<BrowserRouter>
            <Provider store={appStore}>
                    <Header/>
            </Provider>
        </BrowserRouter>)
const loginButton = screen.getByRole("button");

expect(loginButton).toBeInTheDocument();
})

// fireEvent.click(loginButton)
test('should have header login button', () => {
    render(<BrowserRouter>
            <Provider store={appStore}>
                    <Header/>
            </Provider>
        </BrowserRouter>)
const loginButton = screen.getByRole("button",{name : "Login"});

fireEvent.click(loginButton);

const logOutByutton = screen.getByRole("button",{name : "Logout"})

expect(logOutByutton).toBeInTheDocument();
})