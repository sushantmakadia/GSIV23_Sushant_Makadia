import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "../../Component/Card"
import { RootState } from "../../Redux/store";
import { MovieListContainer } from "./MovieListStyled"

interface MovieResponseType {
    adult: boolean,
    backdrop_path: string,
    genre_ids: [],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean
    vote_average: number,
    vote_count: number,
}


export const MovieList = (): JSX.Element => {
    const [list, setList] = useState<MovieResponseType[]>([]);
    const [pageCount, setPageCount] = useState(1);
    const [reset, setReset] = useState(false);
    const search = useSelector((state: RootState) => state.search);
    const fetchUpcomingMovies = async () => {
        if (search != '') {
            setReset(true)
        }
        if (search == '' && reset) {
            setPageCount(1)
            setList([])
            setReset(false)
        }
        const url = process.env.REACT_APP_BASE_URL;
        const apiKey = process.env.REACT_APP_API_KEY;
        const apiEndPoint = search == '' ? `${url}movie/upcoming?api_key=${apiKey}&sort_by=release_date.desc&page=${pageCount}` : `${url}search/movie?api_key=${apiKey}&query=${search}`
        fetch(
            apiEndPoint
        ).then(async (response) => {
            const data = await response.json();
            const movie = [...list, ...data.results]
            search != '' ? setList(data.results) : setList(movie);
        }).catch((error) => {
            console.error('Error fetching upcoming movies:', error);
        });
    };

    useEffect(() => {
        fetchUpcomingMovies();
    }, [pageCount, search, reset]);

    const renderMovieList = () => {
        return list.map((item) => {
            return <Card key={item.id} title={item.title} description={item.overview} rating={item.vote_average} img={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} id={item.id.toString()} />
        })
    }

    const handleScroll = (e: any) => {
        let bottom = Math.floor(e.target.scrollHeight - e.target.scrollTop - 1) <= e.target.clientHeight;
        if (bottom && search == '') {
            setPageCount((prev) => prev + 1);
            bottom = false;
        }
    }
    return <MovieListContainer onScroll={(e: any) => handleScroll(e)} >
        {
            renderMovieList()
        }
    </MovieListContainer>
}