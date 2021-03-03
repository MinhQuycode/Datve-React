import { Button, Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import styles from './styles';
import {withStyles} from '@material-ui/core';
import Movie from "../../components/movie";
// import axios from 'axios';
import {connect} from 'react-redux';
import {getMovieListAction,getMovieListAPI} from '../../redux/actions/movie.action';


class Home extends Component {
  constructor(props){
    super(props);
    // this.state={
    //   listMovie :null,
    // }
  }

  renderListMovie = (list) =>{
    return list?.map((item,index)=>{
      return <Grid item lg={3} md={4} sm={12} key={index}>
       <Movie movie={item}/>
      </Grid>
    })
  }
  render() {
    return <div>
      {/* <Button title='Minh Quy' variant="contained" color="secondary" className={this.props.classes.changeBG}>
          Secondary
      </Button> */}
      {/* Container */}
      <Container maxWidth="lg">
        {/* Row */}
      <Grid container spacing={2}>
        {/* Col */}
        {this.renderListMovie(this.props.movieList)}
      </Grid>
      </Container>
    </div>;
  }
  componentDidMount(){
    this.props.getMovieListApi();
    //Call API
    // axios({
    //   method:"GET",
    //   url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    // })
    // .then((res)=>{
    //   console.log(res);
    //   // this.setState({
    //   //   listMovie :res.data,
    //   // });
    //   this.props.getMovieList(res.data);
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    //key la props cua component : value la phuong thuc gui data len store
    getMovieList : (movieList) => {
      dispatch(getMovieListAction(movieList));
    },
    getMovieListApi : () =>{
      dispatch(getMovieListAPI());
    }
  }
}
const mapStateToProps = (state) =>{
    // key la props cua component : value la state tren store
   return {
    movieList : state.movie.movieList,
   }
} 
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Home));
