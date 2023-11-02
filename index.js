let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

// Thêm đoạn code sau để đóng sidebar khi màn hình điện thoại
const mediaQuery = window.matchMedia("(max-width: 768px)");

function handleMediaQueryChange(e) {
  if (e.matches) {
    // Màn hình điện thoại
    sidebar.classList.add("close");
  } else {
    // Màn hình lớn hơn 768px
    sidebar.classList.remove("close");
  }
}

// Gắn sự kiện lắng nghe cho media query
mediaQuery.addListener(handleMediaQueryChange);

// Kiểm tra ban đầu và xử lý theo kích thước màn hình hiện tại
handleMediaQueryChange(mediaQuery);
