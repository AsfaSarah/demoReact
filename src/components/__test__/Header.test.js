import { Provider } from "react-redux";
import Header from "../Header";
import {render,screen, fireEvent} from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it ("should render header component with a login button",()=>{
    render(
        <BrowserRouter>
         <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton= screen.getByRole("button",{name:"Login"});
    expect(loginButton).toBeInTheDocument();
});


it ("should render header component with cart item 0",()=>{
    render(
        <BrowserRouter>
         <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const cartItems= screen.getByText("Cart (0 item)");
    expect(cartItems).toBeInTheDocument();

    
});


it ("should render header component with cart",()=>{
    render(
        <BrowserRouter>
         <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const cartItemsRegex= screen.getByText(/Cart/);
    expect(cartItemsRegex).toBeInTheDocument();

    
});


it("should change login button to logout on click",()=>{
    render(
        <BrowserRouter>
         <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton= screen.getByRole("button",{name: "Login"});
    fireEvent.click(loginButton);
    const logoutButton= screen.getByRole("button",{name:"Logout"});

    expect(logoutButton).toBeInTheDocument();

});