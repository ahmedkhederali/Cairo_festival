import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from '@material-ui/icons/Tv';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor:"#2d313a",
    zIndex:99999
  },
});


export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()

  useEffect(()=>{
    if(value===0){
      navigate("/Trending")
    }else if(value===1){
      navigate("/movie")
    }else if(value===2){
      navigate("/series")
    }else if(value===3){
      navigate("/search")
    }


  },[value,navigate])
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Trending" style={{color:'white'}} icon={<WhatshotIcon />} />
      <BottomNavigationAction label="Movues" style={{color:'white'}} icon={<MovieIcon />} />
      <BottomNavigationAction label="TV Series" style={{color:'white'}} icon={<TvIcon />} />
      <BottomNavigationAction label="Search" style={{color:'white'}} icon={<SearchIcon />} />
    </BottomNavigation>
  );
}