import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "../../Component/Card"
import { RootState } from "../../Redux/store";
import { MovieListContainer } from "./MovieListStyled"

export const MovieList=():JSX.Element=>{
    const [list,setList] = useState<any[]>([]);
    const [pageCount,setPageCount] = useState(1);
    const [reset,setReset] = useState(false);
    const search = useSelector((state: RootState) => state.search);
    const fetchUpcomingMovies = async () => {
        if(search!=''){
            setReset(true)
        }
        if(search =='' && reset){
            setPageCount(1)
            setList([])
            setReset(false)
        }
      
        const apiEndPoint = search==''?`https://api.themoviedb.org/3/movie/upcoming?api_key=ccfd0f7507aa16306d4f5202a14b5e62&sort_by=release_date.desc&page=${pageCount}`:`https://api.themoviedb.org/3/search/movie?api_key=ccfd0f7507aa16306d4f5202a14b5e62&query=${search}`
        try {
          const response = await fetch(
            apiEndPoint
          );
          const data = await response.json();
          const movie= [...list,...data.results]
          console.log(movie)
          search!=''?setList(data.results):setList(movie);
        } catch (error) {
          console.error('Error fetching upcoming movies:', error);
        }
      };
    
      useEffect(() => {
        fetchUpcomingMovies();
      }, [pageCount,search,reset]);

      const renderMovieList=()=>{
        return list.map((item)=>{
            return <Card title={item.title} description={item.overview} rating={item.vote_average} img={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} id={item.id} />
        })
      }
  
    const handleScroll = (e) => {
      //  console.log(Math.floor(e.target.scrollHeight - e.target.scrollTop),e.target.clientHeight)
        let bottom = Math.floor(e.target.scrollHeight - e.target.scrollTop-1) <= e.target.clientHeight;
        if(bottom && !reset){
            setPageCount((prev)=>prev+1);
            bottom = false;
        }
      }
return <MovieListContainer onScroll={(e)=>handleScroll(e)} >
    {
        renderMovieList()
    }
</MovieListContainer>
}