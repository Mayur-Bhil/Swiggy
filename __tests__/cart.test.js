import { render,screen, fireEvent} from "@testing-library/react"
import { act } from "@testing-library/react"
import Resmenu from "../components/Resmenu"

import { Provider } from "react-redux"
import {appStore} from "../utils/appStore"

global.fetch = jest.fn(()=>Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA_NAME),
    })
)

it('should Load Resturant Menu Component',async()=>{ 
    await act(async()=>render(
    <Provider store={appStore}>
        <Resmenu/>
    </Provider>
))

    const acordianHeader = screen.getByText("Recommended (15)")
    fireEvent.click(acordianHeader)
    expect(screen.getAllByTestId("foodItems").length).toBe(15);
})