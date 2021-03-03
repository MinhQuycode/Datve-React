import {GET_MOVIE_LIST,GET_MOVIE_DETAIL, GET_USER_LIST,POST_ACCOUNT} from '../constants/movie.constant'
import axios from 'axios';
//action creator Viết action dưới dạng function sau đó truyền vào dispatch
export const getMovieListAction = (movieList) =>{
    
    return {
        type : GET_MOVIE_LIST,
        payload : movieList,
    }
  };
export const getMovieListAPI = () =>{
        // call API
return (dispatch) =>{
    axios({
        method:"GET",
        url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      })
      .then((res)=>{
        console.log(res);
        // this.setState({
        //   listMovie :res.data,
        // });
        // this.props.getMovieList(res.data);
        dispatch(getMovieListAction(res.data));
      })
      .catch((err)=>{
        console.log(err)
      })
}
}
//Chi tiết phim
const getMovieDetailAction = (movieDetail) =>{
return {
  type : GET_MOVIE_DETAIL,
  payload :movieDetail,
}
}

export const getMovieDetailAPI = (movieCode) =>{
  // console.log(movieCode)
  return (dispatch) => {
    axios({
      method : "GET",
      url : `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`,
    }).then((res)=>{
      console.log(res.data)
      dispatch(getMovieDetailAction(res.data));
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}

//Danh sach người dùng
const getUserAction = (userList) =>{
  return {
    type : GET_USER_LIST,
    payload : userList,
  }
}

export const getUserAPI = () =>{
  return (dispatch) => {
      axios ({
        method :'GET',
        url :'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung'
      }).then((res)=>{
        dispatch(getUserAction(res.data));
      })
      .catch((err)=>{
        console.log(err);
      })
  }
}
//Thong tin tai khoan
const postAccount = (accountDetail) =>{
  return {
    type : POST_ACCOUNT,
    payload : accountDetail,
  }
}

export const getDetailAccountAPI = () =>{
  return (dispatch) => {
      axios ({
        method :'POST',
        url :'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan'
      }).then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
  }
}
