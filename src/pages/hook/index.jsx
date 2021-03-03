import React,{useState,useEffect} from 'react'


export default function Hook() {
    //================state=================
    const resultState = useState(0);
    console.log(resultState); //[state,setState]
    // c1
    // const state = resultState[0];
    // const setState = resultState[1];
    //c2
    const [state,setState] = resultState;
    //================Effect================
    //Chạy khi gọi component và cả khi update thường dùng để call API or xử lý các tác dụng phụ
    useEffect(function () {
        console.log("Run useffect khong co tham so thu hai");
        return function(){
        //clear tác dụng phụ
            console.log("clear") 
        }
    });
    //Chạy khi gọi component 
    //Thường call API lấy danh sách phim và chi tiết phim
    useEffect(function () {
        console.log("Run useffect có tham số thứ 2 là mảng rỗng");
    },[]);
    //Chạy khi giá trị trong mảng thay đổi 
    //Thường call API để update lại dữ liệu khi click (Rạp chiếu)
    const [name,setName] = useState('Ronaldo');
    useEffect(function () {
        console.log("Run useffect có tham số thứ 2 là mảng có giá trị");
    },[name,state]);
    return (
        <div>
            Login
            <div className="demo-hook">
                <p>State : {state}</p>
                <button onClick={()=>{
                    setState(state+1)
                }}>Tang 1</button>
            </div>
        </div>
    )
}
