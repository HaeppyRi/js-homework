
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}


/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
????????????????????????????
3. 상태 변수 관리 ????????????????/
??????????????????????
4. 로그인 버튼을 클릭시 조건처리

*/



function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}



//querySelector

const userEmail = document.querySelector('#userEmail');
const userPassword = document.querySelector('#userPassword');
const btnLogin = document.querySelector('.btn-login');




/* ===== 1. email 정규표현식을 사용한 validation ===== */

function handleCheckId(){
  if(emailReg(this.value) === true){
      console.log('id 일치');
      userEmail.classList.remove('is--invalid');
  }
  else{
      console.log('id 불일치');
      userEmail.classList.add('is--invalid');
  }
  
}


/* ====== 2. pw 정규표현식을 사용한 validation ===== */

function handleCheckPw(){
  if(pwReg(this.value) === true){
      console.log('pw 일치');
      userPassword.classList.remove('is--invalid');
  }
  else{
      console.log('pw 불일치');
      userPassword.classList.add('is--invalid');
  }
  
}


/* ========== 3. input의 id를 user의 프로퍼티와 비교하기 ========= */


function compareId(){
  if(userEmail.value === user.id){
    console.log('id가 일치합니다.');
    return true;
  }
  else {
    console.log('id를 다시 입력해주세요.');
    return false;
  }
}


/* ========== 4. input의 pw를 user의 프로퍼티와 비교하기 ========= */


function comparePw(){
  if(userPassword.value === user.pw){
    console.log('pw가 일치합니다.');
    return true;
  }
  else {
    console.log('pw를 다시 입력해주세요.');
    return false;
  }
}





/* ========== 5. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동 =========== */

function handleSubmit(e){

  e.preventDefault(); // 이게 여기 왜 들어간다고 했더라,...?

  if(compareId() === true && comparePw() === true){
    console.log('로그인 성공!')
    location.href = 'welcome.html'
  }
  else {
    console.log('아이디 또는 비밀번호가 일치하지 않습니다.')
    alert('아이디 또는 비밀번호가 일치하지 않습니다.')
  }

}




userEmail.addEventListener('input',handleCheckId);
userPassword.addEventListener('input',handleCheckPw);
btnLogin.addEventListener("click", handleSubmit);