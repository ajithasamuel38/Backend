<<<<<<< Updated upstream
<<<<<<< Updated upstream
const link = "http://13.60.65.93:3000/forgotpassword";
=======
const link = "http://localhost:3000/forgotpassword";
>>>>>>> Stashed changes
=======
const link = "http://13.49.224.138:3000/forgotpassword";
>>>>>>> Stashed changes
const form = document.getElementById('forgotPasswordForm');
form.addEventListener('submit', sendemaillink);
async function sendemaillink(event){
    event.preventDefault();
    const email = event.target.email.value
    console.log(email);
    const mailobj = {
       email: email
    }
   await axios.post(link, mailobj).then((response) =>{
    if(response.status === 202){
        document.body.innerHTML += '<div style="color:red;">Mail Successfuly sent <div>'
    } else {
        throw new Error('Something went wrong!!!')
    }
    }).catch((err)=>{
        console.log(err)
    })
}