import { act, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import  { MovieList } from "..";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

describe("DetailPage component", () => {
  it("renders movie details", async () => {
    const store = mockStore({
      search: "",
    });

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        "results": [
            {
                "adult": false,
                "backdrop_path": "/zN41DPmPhwmgJjHwezALdrdvD0h.jpg",
                "genre_ids": [
                    28,
                    878,
                    27
                ],
                "id": 615656,
                "original_language": "en",
                "original_title": "Meg 2: The Trench",
                "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
                "popularity": 1424.145,
                "poster_path": "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
                "release_date": "2023-08-02",
                "title": "Meg 2: The Trench",
                "video": false,
                "vote_average": 7,
                "vote_count": 480
            },
        ]
      }),
    });

    render(
      <Provider store={store}>
        <MovieList />
      </Provider>
    );
    await waitFor(() => {
      const movieTitle = screen.getByText("Meg 2: The Trench");
      const movieRating = screen.getByText("(7)");
      const movieOverview = screen.getByText(
        "An exploratory dive into the deepest depths of th..."
      );

      expect(movieTitle).toBeInTheDocument();
      expect(movieRating).toBeInTheDocument();
      expect(movieOverview).toBeInTheDocument();
    });
  });
});