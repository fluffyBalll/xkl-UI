import { useState,useEffect } from "react";
// 泛型的使用场景，数据的类型会发送变化的时候就可以使用泛型
function useResponse<T>(url: string) {
    const [listData, setListData] = useState<T[]>([]);
    // 需要一个value,作为请求推荐列表的参数
    useEffect(() => {
        // searchParams 发起网络请求
        // 返回数据
        setListData(fakeData);
    });

    return listData;
};
export default useResponse;