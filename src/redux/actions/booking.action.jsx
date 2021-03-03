import {GET_LIST_TICKET} from "../constants/booking.constant";
import axios from 'axios';
export const getTicketListAction = (ticketList) =>{
    return {
        type : GET_LIST_TICKET,
        payload : ticketList,
    }
  };
export const getTicketListAPI = (code) =>{
return async (dispatch) =>{
        // cach 1 - promise
    // axios({
    //     method:"GET",
    //     url:"https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=16009",
    //   })
    //   .then((res)=>{
    //    dispatch(getTicketListAction(res.data))
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //   });
      //c2-async / await thường dùng
      try {
     const res =  await axios({
            method:"GET",
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${code}`,
          });
          dispatch(getTicketListAction(res.data));
      } catch (error) {
          console.log(error)
      }
}
}

export const bookingTicketAPI = (maLichChieu,danhSachVe) =>{
  return async (dispatch) =>{
    try {
     const user = JSON.parse(localStorage.getItem("userLogin"));
     const res = await axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        data :{
            maLichChieu,
            danhSachVe,
            taiKhoanNguoiDung: user.taiKhoan,
          },
        headers:{
          Authorization : `Bearer ${user.accessToken}`,
        }
      });
      alert("Đặt vé thành công !!!");
    } catch (error) {
      console.log(error)
    }
  }
}