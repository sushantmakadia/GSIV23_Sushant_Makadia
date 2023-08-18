import { Card, CardMedia } from "@mui/material";
import styled from "styled-components";

export const CardContainer =styled(Card)`
    width: 200px;
    height: 264px;
    position: absolute;
    left: 0px;
    top: 0px;
    border-radius: 8px;
    background: #ffffff;
    background-blend-mode: normal;
    box-shadow: 0px 2px 4px #9b9b9b;
`
export const ImageContainer = styled(CardMedia)`
    width: 200px;
    height: 200px;
    position: absolute;
    left: 0px;
    top: 0px;
    border-radius: 8px 8px 0px 0px;
    background: #d8d8d8;
    background-blend-mode: normal;
`
export const HeaderSpan = styled.span`
    position: absolute;
    left: 4px;
    top: 203px;
    width: 145px;
    height: 14.06px;
    color: #4a4a4a;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
`
export const SubHeaderSpan = styled.span`
    position: absolute;
    left: 4px;
    top: 223px;
    width: 145px;
    height: 14.06px;
    color: #4a4a4a;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
`
export const InfoSpan = styled.span`
    position: absolute;
    left: 149px;
    top: 203px;
    width: 47px;
    height: 14.06px;
    color: #9b9b9b;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    text-align: right;
`