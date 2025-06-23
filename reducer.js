import storage from './util/storage.js'

const init = {
    todos:storage.get(),
    filter:'all',
    filters:{
        all:() =>true,
        active: todo =>!todo.completed,
        completed: todo =>todo.completed,
    },
    editIndex: null

}
    // Thêm todo
const actions ={
    add({ todos },title){
       if(title){
         todos.push({title,completed: false})
        storage.set(todos)
       }
    },
    // Chuyển trạng thái hoàn thành của 1 todo
    toggle({ todos},index){
        const todo =todos[index]
        todo.completed = !todo.completed
         storage.set(todos)
    },
    // Đánh dấu tất cả là hoàn thành hoặc chưa hoàn thành
    toggleAll({ todos},completed){
        todos.forEach(todo => todo.completed = completed) 
        storage.set(todos)
    },
    // Xóa todo
    destroy({todos},index){
        todos.splice(index,1)
        storage.set(todos)
    },
    // Chuyển bộ lọc trang thái 
    switchFilter(state,filter){
        state.filter=filter
    },
    // Xóa toàn bộ todo
    clearCompleted(state){
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    // Chỉnh sửa một todo
    edit(state,index){
        state.editIndex = index
    },
    // Kết thúc chỉnh sửa todo
    endEdit(state,title){
        if(state.editIndex !== null ){
            if(title){
            state.todos[state.editIndex].title =title
           storage.set(state.todos)
            }
            else{
                // Nếu title rỗng, xóa luôn todo đó
                this.destroy(state, state.editIndex)
            }           
            state.editIndex = null    
        }
    },
    // Hủy bỏ chế độ chỉnh sửa
    canEdit(state){
     state.editIndex = null
    }

}
export default function reducer(state = init,action,args){
    actions[action] && actions[action](state,...args)
    return state
}