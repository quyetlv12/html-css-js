const inputTask = document.querySelector('#input-task');
const addTask = () => {
    const result = inputTask.value // lấy dữ liệu từ ô input
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Lấy giá trị ban đầu từ localStorage
    const arr = [
        ...tasks,
        {
            name: result,
            create_at: new Date()
        }
    ] // nối mảng dữ liệu
    localStorage.setItem('tasks', JSON.stringify(arr)) // convert dữ liệu thành kiểu string => đẩy dữ liệu vào localStorage
} 

// LẤY DỮ LIỆU 
window.onload = function () {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [] /// Lấy giá trị ban đầu từ localStorage
    const listTasks = document.querySelector('#list-task') // lấy danh sách ul
    tasks.forEach((item) => { // chạy vào forEach để in giá trị ra màn hình
        const node = document.createElement('li') // tạo  thẻ li
        node.textContent = item.name // gán giá trị cho thẻ lu
        listTasks.appendChild(node) // đẩy thẻ li vào danh sách ul
    });
};
