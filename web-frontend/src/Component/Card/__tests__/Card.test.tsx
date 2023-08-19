import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Card } from "..";
import { store } from "../../../Redux/store";

describe("Card component", () => {
  const props = {
    title: "Test Title",
    description: "Test Description",
    rating: 4.5,
    id: "test-card",
    img: "test-image.jpg",
  };

  it("renders with props correctly", () => {
    render(
        <Provider store={store}>
        <BrowserRouter>
              <Card {...props} />
        </BrowserRouter>
        </Provider>
    );

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByText(`(${props.rating.toString()})`)).toBeInTheDocument();
  });
});