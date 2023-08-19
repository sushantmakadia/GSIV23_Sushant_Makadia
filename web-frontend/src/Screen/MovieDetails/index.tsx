import { ContainerStyled, DeatailsContainer } from "./MovieDetailsStyled";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface CrewType {
  job: string;
  name: string;
}
interface CastType {
  known_for_department: string;
  name: string;
}
interface MoviesType {
  title: string;
  runtime: number;
  credits: {
    crew: CrewType[];
    cast: CastType[];
  };
  vote_average: number;
  release_date: string;
  overview: string;
  poster_path: string;
}

const DetailPage = () => {
  const selectedMovieId = useSelector((state: RootState) => state.id);
  const [movies, setMovies] = useState({});
  const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY;

  useEffect(() => {
    const url = process.env.REACT_APP_BASE_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `${url}movie/${selectedMovieId}?api_key=${apiKey}&language=en-US&append_to_response=credits`
        );
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMovieDetails();
    return () => {};
  }, [tmdbApiKey, selectedMovieId]);
  if (!selectedMovieId) {
    return <div>Loading...</div>;
  }
  const {
    title,
    vote_average,
    release_date,
    runtime,
    credits,
    overview,
    poster_path,
  } = movies as MoviesType;
  const time = `${String(Math.floor(runtime / 60)).padStart(2, "0")}:${String(
    runtime % 60
  ).padStart(2, "0")}`;
  const Director = credits?.crew
    .filter((value) => value.job === "Director")
    .map((value) => value.name);

  const Actors = credits?.cast
    .filter((value) => value.known_for_department === "Acting")
    .map((value) => value.name)
    .filter((value, index, self) => self.indexOf(value) === index) 
    .slice(0, 2);
  return (
    <ContainerStyled>
      <img
        src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
        height={240}
        width={180}
        alt="Not avalaible"
      />
      <DeatailsContainer>
        <Typography fontSize={24} fontWeight="bold">
          {title} ({vote_average})
        </Typography>
        <Typography fontSize={20}>
          {release_date?.slice(0, 4)} | {time} | {Director}
        </Typography>
        <Typography fontSize={20}>
          Cast: {Actors?.map((actor) => `${actor},`)} …
        </Typography>
        <Typography fontSize={20}>Description: {overview}</Typography>
      </DeatailsContainer>
    </ContainerStyled>
  );
};

export default DetailPage;