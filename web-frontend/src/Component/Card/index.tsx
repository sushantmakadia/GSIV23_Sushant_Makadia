import { useDispatch } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";
import { setMovieId } from "../../Redux/reducers/movieInfo";
import { CardContainer, HeaderSpan, HorizontalDiv, ImageContainer, InfoSpan, SubHeaderSpan } from "./CardStyled"

interface Props {
    title: string;
    description: string | null;
    rating: number;
    img: string;
    id: string;
  }

export const Card = ( {title, description, rating, id, img }:Props)=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleMovieClick = (id:string) => {
        dispatch(setMovieId(id));
        navigate('/details')
      };
    return <CardContainer onClick={() => handleMovieClick(id)}>
        <ImageContainer image={img}  />
        <HorizontalDiv>
        <HeaderSpan >{title}</HeaderSpan>
        <InfoSpan >({rating})</InfoSpan>
        </HorizontalDiv>
        <SubHeaderSpan>{description}</SubHeaderSpan>
    </CardContainer>
}

function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}
