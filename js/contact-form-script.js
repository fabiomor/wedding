$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Controllare i campi inseriti");
    } else {
        // everything looks good!
        event.preventDefault();
        //submitForm();
        if(false){}
        // if (grecaptcha.getResponse() == "") {
        //     formError();
        //     submitMSG(false, "Verificare captcha");
        // }
        else {
            var name = $("#name").val();
            var guest = $("#guest").val();
            var event = $("#event").val();
            var message = $("#message").val();
            var params = {
                name: name,
                message: message,
                guest: guest,
                event: event
            }
            emailjs.send('gmail', 'template_3aRq94v9', params).then(function(response) {formSuccess(); console.log(response)}, function(error) {formError(); console.log(error);});
        }
    }
});


// function submitForm(){
//     // Initiate Variables With Form Content
//     var name = $("#name").val();
//     var email = $("#email").val();
//     var msg_subject = $("#msg_subject").val();
//     var message = $("#message").val();


//     $.ajax({
//         type: "POST",
//         url: "php/form-process.php",
//         data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
//         success : function(text){
//             if (text == "success"){
//                 formSuccess();
//             } else {
//                 formError();
//                 submitMSG(false,text);
//             }
//         }
//     });
// }

function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Messaggio Inviato!")
}

function formError() {
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
    });
}

function submitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}