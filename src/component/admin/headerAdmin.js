const headerAdmin = () => {
  //   var sc = document.createElement("link");
  //   sc.setAttribute("href", "./assets/css/admin.css");
  //   sc.setAttribute("rel", "stylesheet");
  //   sc.setAttribute("id", "css");
  //   document.head.appendChild(sc);
  return /*html*/ `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASM</title>
  <link rel="shortcut icon" href="" type="image/x-icon">
  <!-- font awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!-- reset css -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!-- nunito font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:wght@300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <!-- css -->
 <link rel="stylesheet" href="./assets/css/admin.css">
</head>
<body>
  
 
    <header class="header">
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
                <a href="" class="header__nav--function--link">
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

    
    
</body>
</html>
  `;
};

export default headerAdmin;
