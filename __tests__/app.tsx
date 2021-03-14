import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import Home from "../pages/index";


describe("Home page test", () => {
  test("renders without crashing", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: "The AirQuality App" })
    ).toBeInTheDocument();
  });

   test("renders component correctly", () => {
     const { queryByPlaceholderText } = render(<Home />);

     expect(queryByPlaceholderText("Select your city")).toBeTruthy();
   });
});

