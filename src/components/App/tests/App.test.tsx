import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { data } from "data";
import App from "..";

describe("<App />", () => {
  it("should render <App />", () => {
    render(<App data={data} />);

    expect(
      screen.getByText(new RegExp(data.players[0].firstname, "i"))
    ).toBeInTheDocument();
  });

  it("should handle players search", () => {
    render(<App data={data} />);

    userEvent.type(screen.getByPlaceholderText("Rechercher un joueur"), "NO");

    expect(
      screen.getByText(new RegExp(data.players[0].firstname, "i"))
    ).toBeInTheDocument();

    expect(
      screen.queryByText(new RegExp(data.players[1].firstname, "i"))
    ).not.toBeInTheDocument();
  });
});
