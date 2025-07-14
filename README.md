Todo List - Ứng dụng Quản Lý Công Việc

Đây là một ứng dụng Todo List đơn giản, được xây dựng bằng JavaScript thuần (Vanilla JS), tuân thủ kiến trúc Redux-like để quản lý trạng thái. Giao diện được tách rời với logic, giúp dễ bảo trì và mở rộng.

![screenshot2](https://github.com/Kanyo77/tk-todo-list/blob/a70ef1d822e7738ef47725121de7351dba073cce/Screenshot2.png)

## 🚀 Chức năng chính

- Thêm công việc mới
- Đánh dấu hoàn thành
- Xoá công việc
- Lọc theo trạng thái: Tất cả, Hoàn thành, Chưa hoàn thành
- Quản lý state bằng pattern reducer + store (tự triển khai)


![screenshot1](https://github.com/Kanyo77/tk-todo-list/blob/a70ef1d822e7738ef47725121de7351dba073cce/Screenshot1.png)

![screenshot3](https://github.com/Kanyo77/tk-todo-list/blob/a70ef1d822e7738ef47725121de7351dba073cce/Screenshot3.png)

## 🛠 Công nghệ sử dụng

- JavaScript (ES6+)
- HTML5
- CSS3
- Kiến trúc: Functional programming, custom `createStore` như Redux

Toàn bộ state được quản lý bởi `createStore` tự viết trong `core.js`, với các tính năng như:

- `attach(component, root)`: Gắn component vào DOM.
- `connect(selector)`: Truyền state vào component.
- `dispatch(action, ...args)`: Gửi action và cập nhật lại UI.

![screenshot4](https://github.com/Kanyo77/tk-todo-list/blob/a70ef1d822e7738ef47725121de7351dba073cce/Screenshot4.png)
