import {fireEvent, render,screen } from "@testing-library/react";
import {act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../../components/mocks/MockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch= jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});


it("should load Restaurant Menu Component",async()=>{
    await act(async()=>render(
        <Provider store={appStore}>
    <RestaurantMenu/>
    </Provider>));

    const accordionHeader= screen.getByText("Biryani Buckets(10)");
    fireEvent.click(accordionHeader);
})