import { Card, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";

export const CardContainer = styled(Card)`
    width: 200px;
    height: 264px;
    border-radius: 8px;
    background: #ffffff;
    background-blend-mode: normal;
    margin:17px;
    box-shadow: 0px 2px 4px #9b9b9b;
`
export const ImageContainer = styled(CardMedia)`
    width: 200px;
    height: 200px;
    border-radius: 8px 8px 0px 0px;
    background: #d8d8d8;
    background-blend-mode: normal;
`
export const HeaderSpan = styled(Typography)`
    margin-left: 4px !important;
    width: 145px;
    line-height: 14.06px;
    color: #4a4a4a;
    font-family: Roboto;
    font-size: 12px !important; 
    font-weight: 500 !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const SubHeaderSpan = styled(Typography)`
    margin-left: 4px !important;
    width: 145px;
    color: #4a4a4a;
    line-height: 14.06px;
    font-size: 12px !important;
    font-weight: 400 !important;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* Limit to 2 lines */
    overflow: hidden;
    text-overflow: ellipsis;
`
export const InfoSpan = styled(Typography)`
    width: 47px;
    height: 14.06px;
    color: #9b9b9b;
    font-family: Roboto;
    font-size: 12px !important;
    font-weight: 400 !important;
    text-align: right;
`
export const HorizontalDiv = styled.div`
    display:flex;
    flex-direction: row;
`
