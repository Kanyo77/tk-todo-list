import html from "../core.js";
import { connect } from "../store.js";

function footer({ todos, filter, filters }) {
  return html`
    <footer class="footer">
    
       <!-- Hiển thị toàn bộ số lượng todo  -->
      <span class="todo-count">
        <strong>${todos.filter(filters.active).length}</strong>
        item left</span>

        <!--Lọc todo theo trạng thái : All / Active / Completed -->
      <ul class="filters">
        ${Object.keys(filters).map(
          (type) => html`
            <li>
              <a
                class="${filter === type && "selected"}"
                href="#"
                onclick="dispatch('switchFilter','${type}')"
              >
                ${type[0].toUpperCase() + type.slice(1)}
              </a>
            </li>
          `
        )}
      </ul>

       <!-- Hiển thị nút xóa -->
      ${todos.filter(filters.completed).length > 0 &&
      html`
        <button class="clear-completed" onclick="dispatch('clearCompleted')">
          Clear completed
        </button>
      `}
    </footer>
  `;
}

export default connect()(footer);
