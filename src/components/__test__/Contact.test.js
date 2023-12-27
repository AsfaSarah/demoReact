import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us component",()=>{
    render(<Contact/>);

   const heading= screen.getByRole("heading");

   //Assertion
   expect(heading).toBeInTheDocument();


});

test("should load button inside our contact component",()=>{
    render(<Contact/>);

   const button= screen.getByRole("button");

   //Assertion
   expect(button).toBeInTheDocument();


});

test("should load input name inside contact component",()=>{
    render(<Contact/>);

   const inputText= screen.getByPlaceholderText("name");

   //Assertion
   expect(inputText).toBeInTheDocument();


});

test("should load 2 input text in contact us component",()=>{
    render(<Contact/>);

   const inputTextLength= screen.getAllByRole("textbox");

   //Assertion
   expect(inputTextLength.length).toBe(2);


});