// /////////////////////////////////////////////////// Database //////////////////////////////////////////////////
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase, push, ref,} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyA0v1hneOWpDI5F8fFZzBx3uBqLZ7NzGVc",
  authDomain: "decoroom-steel.firebaseapp.com",
  projectId: "decoroom-steel",
  storageBucket: "decoroom-steel.appspot.com",
  messagingSenderId: "358541889072",
  appId: "1:358541889072:web:66bf896193c3c8243727f5"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

// /////////////////////////////////////////////////// swal //////////////////////////////////////////////////
document.getElementById('btn3').addEventListener('click',()=>{
    Swal.fire({
      title: "Задать вопрос",
      text: 'Наши менеджеры свяжутся с вами в удобное для вас время',
      icon: "question",
      html: `
      <h4>Наши менеджеры свяжутся с вами в удобное для вас время</h4>
        <input placeholder='Ваше имя' id="swal-input1" class="swal2-input">
        <input placeholder='Телефон' id="swal-input2" class="swal2-input">
        <textarea  placeholder='вопрос' cols='28' id="swal-textarea" class="swal2-textarea"></textarea>
      `,
    }).then(()=>{
      let nameValue = document.getElementById('swal-input1');
      let telValue = document.getElementById('swal-input2');
      let quizValue = document.getElementById('swal-textarea');
      let allName = {
        userName: nameValue.value,
        userTel: telValue.value,
        userQuiz: quizValue.value,
      }
      const refDB = ref(db,`decoroom-steel/savol/${nameValue.value}`);
      push(refDB,allName);
      
      Swal.fire({
        title: "Ваша заявка принята !",
        text: "Дождитесь звонка оператора",
        icon: "success"
      });
    })
  })