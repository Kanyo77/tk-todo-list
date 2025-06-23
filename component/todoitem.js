import html from "../core.js";
import { connect } from "../store.js";

function todoitem({ todo, index, editIndex }) {
  return html`
    <li
      class="${todo.completed && "completed"} 
			${editIndex === index && "editing"}
			"
    >
      <div class="view">
        <!-- Hiện checkbox đánh dấu hoàn thành -->
        <input
          class="toggle"
          type="checkbox"
          ${todo.completed && "checked"}
          onchange="dispatch('toggle',${index})"
        />

         <!-- Double click để chuyển sang chế độ chỉnh sửa -->
        <label ondblclick="dispatch('edit',${index})">${todo.title}</label>
        <!-- Nút xóa -->
        <button class="destroy" onclick="dispatch('destroy',${index})"></button>
      </div>

      <!-- Input để chỉnh sửa todo -->
      <input
        class="edit"
        value="${todo.title}"
        onkeyup="event.keyCode === 13 && dispatch('endEdit',this.value.trim())
						|| event.keyCode === 27 && dispatch('canEdit')
						"
        onblur="dispatch('endEdit',this.value.trim())"
      />
    </li>
  `;
}

export default connect()(todoitem);
