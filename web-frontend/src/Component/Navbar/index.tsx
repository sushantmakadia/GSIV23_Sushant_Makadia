import { NavbarStyled, SearchBarStyled } from "./NavbarStyled";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { InputBase, IconButton, Typography } from "@mui/material";
import { setSearch } from "../../Redux/reducers/movieInfo";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ChangeEvent } from "react";


const Navbar = () => {

  const dispatch = useDispatch();
const navigate = useNavigate();
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
      dispatch(setSearch(query));
     
  };
  return (
    <NavbarStyled>
        <SearchBarStyled data-testid="search-bar">
          <SearchIcon sx={{ color: "#4A4A4A" }} />
          <InputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            sx={{ width: "inherit" }}
            onChange={handleInputChange}
          />
        </SearchBarStyled>
    
      <IconButton onClick={()=>navigate('/')}>
        <HomeIcon fill="#4A4A4A"/>
      </IconButton>
    </NavbarStyled>
  );
};

export default Navbar;