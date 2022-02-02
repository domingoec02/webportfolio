function sendMail(params){
    // console.log(document.getElementById("inputName").value)
    // console.log(document.getElementById("inputEmail").value)
    // console.log(document.getElementById("inputMessage").value)
    var tempParams = {
        from_name: document.getElementById("inputName").value,
        from_email: document.getElementById("inputEmail").value,
        message: document.getElementById("inputMessage").value

    }
    emailjs.send('service_t6cmjhi', 'template_fyole1p', tempParams)
    .then(function(res){
        console.log("success", res.status)
    })
}