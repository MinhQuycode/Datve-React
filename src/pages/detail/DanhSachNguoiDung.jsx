import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getUserAPI,getDetailAccountAPI } from '../../redux/actions/movie.action';

 class DanhSachNguoiDung extends Component {
    render() {
        return (
            <div>
                Danh sách người dùng and thông tin tài khoản
            </div>
        )
    }
    componentDidMount(){
        this.props.dispatch(getUserAPI());
        this.props.dispatch(getDetailAccountAPI());
    }
}
export default connect()(DanhSachNguoiDung);