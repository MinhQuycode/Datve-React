import { SIGN_IN } from "../constants/user.constant"
import axios from 'axios';

const signInAction = (user) =>{
    return {
        type : SIGN_IN,
        payload : user
    }
}
export const signInAPI = (user, history) =>{
    return (dispatch) => {
        axios({
            method : 'POST',
            url :'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data: user,
        }).then((res)=>{
            dispatch(signInAction(res.data))
            //Luu xuong localstorage
            localStorage.setItem("userLogin",JSON.stringify(res.data));
            //Chuyen trang 
            // history.push("/");
            //Chuyen lai trang truoc do
            history.goBack();
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}