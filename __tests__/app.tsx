import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import Home from "../pages/index";

describe("App", () => {
  test("renders correctly", () => {
    const { queryByPlaceholderText } = render(<Home />);

    expect(queryByPlaceholderText("Select your city")).toBeTruthy();
  });
});


// describe("App", () => {
//   it("renders without crashing", () => {
//     render(<Home />);
//     expect(
//       screen.getByRole("heading", { name: "The AirQuality App" })
//     ).toBeInTheDocument();
//   });
// });