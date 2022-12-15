import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Storage from 'react-native-storage'
/**
 * @nguyentruongkhoinguyen 
 * Cho một cáu Button -> Sau khi nhấn Button đó -> Tiến hành lưu thông tin người dùng;
 */

export default function DemoLocalStorage() {
    //Tạo biến cho 'defaultExpires':
    const expiredTime = 8 * 60 * 60 * 1000


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


    //LƯU DATA:
    const saveStorage = () =>{
        storage.save({
            //Key: 'Tên key':
            key: 'keyA',
            //Data: 'Dữ liệu cần lưu trữ'
            data: 'Đây là giữ liệu của keyA được lưu trong LocalStrorage',
          
            // if expires not specified, the defaultExpires will be applied instead.
            // if set to null, then it will never expire.
            expires: 1000 * 3600
        });
    }
    //LẤY DATA:
    const getStorage = ()=>{
        storage.load({
            //Gọi đúng tên key đã được lưu trữ trước đó:
            key: 'keyA',
            //Bất đồng bộ:
            autoSync: true,
            //SyncBackground:
            syncInBackground: true,
        }).then((data)=>{
            console.log(data)
        }).catch(error =>{
            console.log(`Lỗi là ${error}`)
        })
    }
    //XÓA DATA:
    const removeStorage = ()=>{
        storage.remove({
            key: 'keyA'
        });
    }


    //Biến 'saveLocalStorage' cho sự kiện onPress:
    const saveLocalStorage = () =>{
        /** Kích hoạt hàm save: */
        //saveStorage()

        /** Lấy data */
        getStorage()

        /** Xóa DATA */
        //removeStorage()
    }
  return (
    <View
        style={{flex:1, justifyContent:'center', alignItems:'center'}}
    >
        <TouchableOpacity
            //Lắng nghe sự kiện:
            onPress={saveLocalStorage}
        >
            <Text>DemoLocalStorage</Text>
        </TouchableOpacity>
    </View>
  )
}

// 1:00:29 (Buổi 17)