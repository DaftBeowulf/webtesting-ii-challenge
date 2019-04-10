import React from "react";
import { render, cleanup } from "react-testing-library";

import Display from "./Display";

afterEach(cleanup);

describe("<Display/>", () => {
  const initialCount = { balls: 0, strikes: 0 };
  it("renders successfully", () => {
    render(<Display count={initialCount} />);
  });

  it("initially shows ball count of 0 upon loading", () => {
    const { getByText } = render(<Display count={initialCount} />);
    getByText(/balls: 0/i);
  });
});
