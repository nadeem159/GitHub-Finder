// Make A User Finder

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{
    // get input text

    const userText = e.target.value;

    if(userText !== ''){
       console.log(userText);
    }
})