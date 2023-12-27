import { render,screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

// it("should render RestaurantCard component with props Data",()=>{

//     render(<RestaurantCard resList={MOCK_DATA}/>);

//    const name= screen.getByText("Burger King");
//    expect(name).toBeInTheDocument();

// });


// it("should render RestaurantCard component with Promoted Label",()=>{
//     render(withPromotedLabel(<RestaurantCard />));
// });