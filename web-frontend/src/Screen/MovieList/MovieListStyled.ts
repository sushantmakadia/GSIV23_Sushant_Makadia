import styled from "styled-components";


export const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 64px;
  height: calc(100vh - 72px);
  overflow-y: scroll;
  a {
    text-decoration: none !important ;
  }
`;