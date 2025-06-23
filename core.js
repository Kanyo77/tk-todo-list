// nối các chuỗi và biến lại thành HTML string đầy đủ.
export default function html([first,...strings],...values){
    return values.reduce( 
        (acc,cur) => acc.concat(cur,strings.shift()),
        [first]
    )
     .filter(x => x && x !== true || x === 0)
     .join('')
}

export function createStore(reduce){
    // khởi tạo state từ reducer
    let state = reduce() 

    // lưu danh sách các root DOM element và component tương ứng
    const roots = new Map()

     // Render lại toàn bộ UI mỗi khi state thay đổi
    function render(){
        for (const [root, component] of roots ){
            const output = component()
            root.innerHTML = output
        }
    }
     // Gắn component vào 1 element DOM và render lần đầu
    return {
        attach: function(component,root){
            roots.set(root,component)
            render()
        },
        // Tạo hàm HOC connect: truyền state vào component
        connect: function(selector = state =>state){
            return component => (props,...args) =>
                 component(Object.assign({},props,selector(state),...args))
        },
        // Gửi action → cập nhật state → gọi render()
        dispatch(action,...args){
            state = reduce(state,action,args)
            render()
        } 
    }
}