const headerAdmin = () => {
  //   var sc = document.createElement("link");
  //   sc.setAttribute("href", "./assets/css/admin.css");
  //   sc.setAttribute("rel", "stylesheet");
  //   sc.setAttribute("id", "css");
  //   document.head.appendChild(sc);
  return /*html*/ `

  
 
    <header class="header1" >
      <div class="header__wrap">
        <nav class="header__nav">
          <div class="header__nav--function">
            <ul class="header__nav--function--list">
              <li class="header__nav--function--item">
                <a href="/admin" class="header__nav--function--link">
                  <i class="fa-solid fa-house"></i>
                  Trang chủ
                </a>
              </li>
              <li class="header__nav--function--item">
                <a href="/" class="header__nav--function--link">
                  <i class="fa-solid fa-globe"></i>
                  Vào website
                </a>
              </li>
              <li class="header__nav--function--item">
                <a href="" class="header__nav--function--link">
               
                <i class="fa-sharp fa-solid fa-gear"></i>
                  Projects
                </a>
              </li>
           
            
            </ul>
          </div>
          <div class="header__nav--logout">
            <a href="" class="header__nav--logout--link">
              <i class="fa-solid fa-power-off"></i>
              Đăng xuất
            </a>
          </div>
        </nav>
      </div>
    </header>

    
    

  `;
};

export default headerAdmin;
