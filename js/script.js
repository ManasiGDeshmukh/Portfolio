// darkmode

let darkmode = document.querySelector('#darkmode');
     
darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}


// Contact Us

const name1 = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('contact-form');

function sendEmail(){
const ebody=`Name: ${name1.value}
  <br>
   Email : ${email.value}
   <br>
   Message: ${message.value}`;
Email.send({
Host : "smtp.elasticemail.com",
Username : "manasi.deshmukh@cumminscollege.in",
Password : "79E12A04170D79BF06E685839AA2CBAF56B5",
To : 'manasi.deshmukh@cumminscollege.in',
From : 'manasi.deshmukh@cumminscollege.in',
Subject : "tried to contact from" + email.value,
Body : ebody
}).then(
message => alert(message)
);
console.log(ebody)
}