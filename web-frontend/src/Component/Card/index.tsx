import { CardContainer, HeaderSpan, HorizontalDiv, ImageContainer, InfoSpan, SubHeaderSpan } from "./CardStyled"

interface Props {
    title: string;
    description: string | null;
    rating: number;
    img: string;
    id: string;
  }

export const Card = ( {title, description, rating, id, img }:Props)=>{
    return <CardContainer >
        <ImageContainer image={img}  />
        <HorizontalDiv>
        <HeaderSpan >{title}</HeaderSpan>
        <InfoSpan >({rating})</InfoSpan>
        </HorizontalDiv>
        <SubHeaderSpan>{description}</SubHeaderSpan>
    </CardContainer>
}