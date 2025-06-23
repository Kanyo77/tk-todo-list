import html from "../core.js";
import { connect } from "../store.js";
import todoitem from "./todoitem.js";

function todolist({ todos, filter, filters }) {
  console.log(filters);
  return html`
    <section class="main">
    
      <!-- Hoàn thành tất cả/bỏ hoàn thành tất cả -->
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        onchange="dispatch('toggleAll',this.checked)"
        ${todos.every(filters.completed) && "checked"}
      />

      <label for="toggle-all">Mark all as complete</label>
      
      <!-- Danh sách các todo đã lọc -->
      <ul class="todo-list">
        ${todos
          .filter(filters[filter])
          .map((todo, index) => todoitem({ todo, index }))}
      </ul>
    </section>
  `;
}

export default connect()(todolist);
