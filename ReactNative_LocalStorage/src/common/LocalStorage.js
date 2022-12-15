import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "react-native-storage";
/**
 * File này quản lý các code Local Storage (Các hàm dùng chung)
 */
//STORAGE LƯU TRỮ:
const storage = new Storage({
    // Số dòng dữ liệu tối đa mà ta lưu trữ:
    //Chỉ cho dùng 10 key:
    size: 10,

    // Tự động nhận dạng thể loại lưu trữ ở đâu (Windows hay Web):
    storageBackend: AsyncStorage,
  
    // Thời gian hết hạn của Key Value:
    //Cho là 8H (8 Tiếng)
    defaultExpires: expiredTime,
  
    // Lưu trữ data trong bộ nhớ RAM;
    //Không nên để 'true' vì sẽ gây tốn tài nguyên máy tính
    enableCache: false,
});

//LƯU TRỮ DATA (Tái sử dụng ở nhiều nơi):
saveStorage('A', 'Gia tri key A')
export const saveStorage = (keyName, data) =>{
    storage.save({
        //Key: 'Tên key':
        key: keyName,
        //Data: 'Dữ liệu cần lưu trữ'
        data: data,
    });
}

//LẤY DATA (Tái sử dụng ở nhiều nơi): 
export const getDataLocalStorageByKey = async (keyName)=>{
    //Vì thêm await thì phải áp dụng try catch:
    try{
        //Muốn sử dụng được 'await' là phải có 'async':
        //Nếu chạy thành công và không lỗi -> return data:
        const data = await storage.load({
            //Gọi đúng tên key đã được lưu trữ trước đó:
            key: keyName,
            //Bất đồng bộ:
            autoSync: true,
            //SyncBackground:
            syncInBackground: true,
        })
        return data;
    }catch(error){
        //Nếu như mà ra lỗi -> return data rỗng:
        return ''
    }
}