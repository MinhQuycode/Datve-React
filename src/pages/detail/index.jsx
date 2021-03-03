// import React, { useEffect } from 'react';
// import {connect} from "react-redux";
// import {getMovieDetailAPI} from "../../redux/actions/movie.action";

//  class Detail extends Component {
//     render() {
//         return (
//             <div>
//                 Thông tin chi tiết phim.
//             </div>
//         )
//     }
//     componentDidMount(){
//         this.props.dispatch(getMovieDetailAPI())
//     }
// }
// export default connect()(Detail);

//===============================
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getMovieDetailAPI} from "../../redux/actions/movie.action";
import {NavLink, useParams} from "react-router-dom";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import  format  from "date-format";


function Detail() {
    const dispatch = useDispatch();
    const movieDetail = useSelector((state)=>state.movie.movieDetail);
    const {lichChieu} = movieDetail;
    const {movieCode} = useParams();
    // console.log(movieCode);
    useEffect(() => {
        dispatch(getMovieDetailAPI(movieCode))
    },[]);

    const renderLichChieu = () =>{
        return lichChieu?.map(({tenPhim, giaVe,ngayChieuGioChieu,thoiLuong,maLichChieu},index)=>(
            <TableRow  key={index}>
              <TableCell align="center">{tenPhim}</TableCell>
              <TableCell align="center">{giaVe}</TableCell>
              <TableCell align="center">{format("dd-MM-yyyy | hh:mm",new Date(ngayChieuGioChieu))}</TableCell>
              <TableCell align="center">{thoiLuong}</TableCell>
              <TableCell align="center">
                <Button variant="contained" color="secondary">
                    <NavLink to={`/booking/${maLichChieu}`}>
                    Booking :{maLichChieu}
                    </NavLink>
                </Button>      
              </TableCell>
            </TableRow>
        ));
    }

    return (
        <div style={{height:"300vh"}}>
            <img src={movieDetail.hinhAnh}/>
            <h2>Show Lich Chieu</h2>
            <div>
            <TableContainer >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Tên phim</TableCell>
            <TableCell align="center">Giá vé</TableCell>
            <TableCell align="center">Ngày chiếu giờ chiếu</TableCell>
            <TableCell align="center">Thời lượng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {renderLichChieu()}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        </div>
    )
}

export default Detail;
