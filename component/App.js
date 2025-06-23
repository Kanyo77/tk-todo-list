import html from "../core.js";
import { connect } from "../store.js";
import header from "./header.js";
import todolist from "./todolist.js";
import footer from "./footer.js";

function App({ todos }) {
  return html`
    <section class="todoapp">
    <!-- Hiển thị danh sách công việc nếu có ít nhất 1 todo -->
      ${header()} ${todos.length > 0 && todolist()}
      <!-- Hiển thị footer (bộ lọc + xóa) nếu có ít nhất 1 todo -->
      ${todos.length > 0 && footer()}
    </section>
  `;
}

export default connect()(App);
