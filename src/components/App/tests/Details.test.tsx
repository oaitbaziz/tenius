import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "..";
import { data } from "data";

describe("<Details />", () => {
  it("should render <Details />", () => {
    render(<App data={data} />);

    userEvent.click(
      screen.getByText(new RegExp(data.players[0].firstname, "i"))
    );

    expect(screen.getByTitle("details")).toBeInTheDocument();
  });

  it("should close details modal when the user press Escape key", () => {
    render(<App data={data} />);

    userEvent.click(
      screen.getByText(new RegExp(data.players[0].firstname, "i"))
    );

    userEvent.keyboard("{Escape}");

    expect(screen.queryByTitle("details")).not.toBeInTheDocument();
  });
});
