const formValidation = () => {
    const username = document.getElementById('usrname').value;
    const emailid = document.getElementById('usrmail').value;
    const password = document.getElementById('usrpassword').value;
    const repassword = document.getElementById('usrrepassword').value;

    const promise = verification(username, emailid, password, repassword)
    
    Promise.all([promise])
        .then(() => {
            console.log({ username, emailid, password, repassword });
            document.getElementById('errmessage').innerHTML = '';
            return passwordvalidation(password,repassword);

        })
        .then((pass) => {
            console.log({ password, repassword });
            document.getElementById('errmessage').innerHTML = pass;
            window.location.href="app.html"
        })
        .catch((error) => {
            document.getElementById('errmessage').innerHTML = error;
        });
};

const passwordvalidation = (password,repassword) => {
    return password === repassword
        ? Promise.resolve("password matched")
        : Promise.reject("password mismatched");
};

const verification = (username, emailid, password, repassword) => {
    if (!username || !emailid || !password || !repassword) {
        return Promise.reject("all fields must be filled");
    }
    return Promise.resolve();
};