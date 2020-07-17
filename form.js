var email = $(".email");
var first_name = $(".first-name");
var text = $(".text");
var form = $("#form");
var box = $(".input-box");

form.submit(function (event) {
    event.preventDefault();
    checkInput();
})
function checkInput() {
    const emailValue = email.val().trim();
    const first_nameValue = first_name.val().trim();
    const formValue = text.val().trim();
        
    if (emailValue === "") {
        setErrorFor(email,"yêu cầu nhập email");
        console.log(emailValue)
    } else if (!isEmail(emailValue)) {
		setErrorFor(email, 'không phải là email');
    }else{
        setSuccessFor(email)
    }
    if (first_nameValue === "") {
        setErrorFor(first_name,"yêu cầu nhập first name");
    }else{
        setSuccessFor(first_name)
    }
    if (formValue === "") {
        setErrorFor(text,"yều cầu nhập văn bản");
    }else{
        setSuccessFor(text)
    }
}
function setErrorFor(input,massage) {
    const boxInput = input.parent();
    const span = boxInput.children("span");
    span.text(massage);
    boxInput.addClass("error");
    boxInput.removeClass("success");
}
function setSuccessFor(input) {
    debugger;
    const boxInput = input.parent();
    console.log(boxInput);
    const span = boxInput.children("span");
    console.log(span);
    boxInput.addClass("success");
    boxInput.removeClass("error");
    span.text("");

}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
