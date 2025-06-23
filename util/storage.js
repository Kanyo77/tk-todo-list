// Khóa để lưu danh sách todo trong localStorage
const TODOS_STORAGE_KEY ='TODOS'

export default{
        // Lấy danh sách todos từ localStorage
    get(){
        // Trả về mảng todos nếu có dữ liệu, nếu không trả về mảng rỗng []
        return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || []
    },
         // Lưu danh sách todos vào localStorage
    set(todos){
        // Chuyển todos thành JSON string để lưu
        localStorage.setItem(TODOS_STORAGE_KEY,JSON.stringify(todos))
    }
}