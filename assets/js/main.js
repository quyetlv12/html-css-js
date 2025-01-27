const inputTask = document.querySelector('#input-task');
const addTask = () => {
    const result = inputTask.value // lấy dữ liệu từ ô input
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Lấy giá trị ban đầu từ localStorage
    const arr = [
        ...tasks,
        {
            id : Math.random().toString(16).slice(2),
            name: result,
            create_at: new Date()
        }
    ] // nối mảng dữ liệu
    localStorage.setItem('tasks', JSON.stringify(arr)) // convert dữ liệu thành kiểu string => đẩy dữ liệu vào localStorage

    location.reload();

} 

const deleteItem = (btn) =>{
    let comfirmOk = confirm("Bạn có muốn xoá không ?");
    if (comfirmOk) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // lấy dữ liệu trên store về
    const newTasks = tasks.filter(_elt => _elt.id !== btn.dataset.id)  // dùng hàm filter để loại bỏ cái object mà chứa id click vào
    localStorage.setItem('tasks', JSON.stringify(newTasks))

    location.reload();  
    }
    

}
// LẤY DỮ LIỆU 
window.onload = function () {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [] /// Lấy giá trị ban đầu từ localStorage
    const listTasks = document.querySelector('#list-task') // lấy danh sách ul
    tasks.forEach((item) => { // chạy vào forEach để in giá trị ra màn hình
        const node = document.createElement('li') // tạo  thẻ li
        node.innerHTML = `
        <div class="flex justify-between">
        <span>${item.name}</span>
        <button onclick="deleteItem(this)" data-id=${item.id} class="cursor-pointer">Xoá</button>
        </div>
        ` // gán giá trị cho thẻ lu
        listTasks.appendChild(node) // đẩy thẻ li vào danh sách ul
    });
};
