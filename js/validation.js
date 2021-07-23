const id_input = document.getElementById("id-input");
// const pw_input = document.getElementById('pw-input');
const login_btn = document.getElementById("login-button");
const invalid_id = document.getElementById("invalid-id");
const invalid_pw = document.getElementById("invalid-pw");

const user_input_email = document.getElementById("user-input-email");
const email_icon = document.getElementById("email-icon");
const user_input_pw = document.getElementById("user-input-pw");
const pw_icon = document.getElementById("pw-icon");

// valid 함수: 전체 유효성 체크
const valid = () => {
    if(checkId()){
        if(checkPw()){
            return true햐;
        }
    }
    return false;
}

// checkId 함수: ID 유효성 체크
const checkId = () => {
    if(id_input.value && checkEmail(id_input.value)){
        invalid_id.style.display = "none";
        user_input_email.className = "user-input valid";
        email_icon.className = "input-icon valid";
        return true;
    } else{
        invalid_id.style.display = "inline";
        user_input_email.className = "user-input invalid";
        email_icon.className = "input-icon invalid";
        if(id_input.value && !checkEmail(id_input.value)){
            invalid_id.innerHTML = "아이디(이메일)는 이메일 형식으로 입력해 주세요.";
        } else{
            invalid_id.innerHTML = "아이디(이메일)를 입력해 주세요.";
        }
        return false;
    }
}

// checkEmail 함수: 이메일 형식 체크
const checkEmail = (str) => {
    const arr = str.split('');
    if(arr.indexOf("@") > 0 && arr.indexOf("@") !== str.length -1){
        return true;
    }
    return;
}

// 비밀번호 유효성 체크
const checkPw = () => {
    if(pw_input.value && pw_input.value.length > 5){
        console.log("A");
        invalid_pw.style.display = "none";
        user_input_pw.className = "user-input valid";
        pw_icon.className = "input-icon valid";
        return true;
    } else{
        console.log("B");
        invalid_pw.style.display = "inline";
        user_input_pw.className = "user-input invalid";
        pw_icon.className = "input-icon invalid";
        if(pw_input.value && pw_input.value.length < 6){
            invalid_pw.innerHTML = "숫자, 영어 조합 6자리 이상 입력해야 합니다.";
        } else{
            invalid_pw.innerHTML = "비밀번호를 입력해 주세요.";
        }
        return false;
    }
}

// inputChange 함수: 로그인 버튼 활성화 여부 체크
const inputChange = () => {
    if(id_input.value && pw_input.value){
        login_btn.className = "button valid"
    } else{
        login_btn.className = "button initialization"
    }
}
