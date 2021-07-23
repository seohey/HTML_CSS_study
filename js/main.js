const toggle_icon = document.getElementById("toggle-icon");
const pw_input = document.getElementById('pw-input');
const check_box = document.getElementById("auto-login");
const tip_box = document.getElementById("tip");

// toggle 함수: 패스워드 보이기 / 숨기기 기능
const toggle = () => {
    if(pw_input.className === "input-box password"){
        pw_input.className = "input-box password visible";
        pw_input.type = "text"
        toggle_icon.setAttribute("src", "images/icon_hide.svg");
        // 비밀번호 숨기기 상태일 경우 인풋 타입을 텍스트로 바꾸고 아이콘을 바꿈
    } else{
        pw_input.className = "input-box password";
        pw_input.type = "password";
        toggle_icon.setAttribute("src", "images/icon_show.svg");
        // 비밀번호 보이기 상태일 경우 인풋 타입을 패스워드로 바꾸고 아이콘을 바꿈
    }
}

toggle_icon.addEventListener("click", () => toggle());

// autoLogin 함수: 자동로그인 체크 시 말풍선 보이기 기능
const autoLogin = () => {
    if(check_box.checked){
        tip_box.style.display = "block";
    }else{
        tip_box.style.display = "none";
    }
}

check_box.addEventListener("click", () => autoLogin());