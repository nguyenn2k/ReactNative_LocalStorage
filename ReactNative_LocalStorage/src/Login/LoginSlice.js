//Nơi khai báo những cái Action;
//Listener những cái Bất đồng bộ từ Thunk;

import { createSlice } from "@reduxjs/toolkit";
import { KEY_STORAGE } from "../common/Constant";
import { saveStorage } from "../common/LocalStorage";
import { Login } from "./LoginThunk";


//Tạo state mặc định:
const initialState ={
    //Đang sử dụng State:
    accessToken:'',
    isLoaing: false,
}
const LoginSlice= createSlice({
    //Name:
    name:'LoginSlice',
    initialState: initialState,
    //Vì ở đây chúng ta không có Reducer (bất đồng bộ)=> Kế thừa extraReducer :
    extraReducers: builder =>{
        //Lắng nghe trạng thái check login:
        //Trong TH mà LoginThunk ở trạng thái pending, (làm cái gì đó tương ứng)
        builder.addCase(Login.pending,(state,action)=>{
            //update state lại
            state.isLoaing=true //(Làm cái quay vòng loading)
           //Nếu như Login mình xử lý xong -> fulfilled :
        }).addCase(Login.fulfilled,(state,action)=>{
            //Đã lấy được data-> isLoading cập nhật lại là false
            state.isLoaing=false;
            //Lấy được Token và lưu lại:
            saveStorage(KEY_STORAGE.token, action.payload)
            //Không thể nào sử dụng Hook ở đây <-
        })
    }
})

export default LoginSlice.reducer