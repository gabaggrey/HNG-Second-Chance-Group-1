(function () {
    var email = document.getElementById("email");
    var feedback = $(".feedback");
    var form = $("#signupform");
    var submitButton = $("#submit");
    var password = $("#password");
    var confirm = $("#confirm");
    var backenderror = $("#error");

    if (backenderror.val() != null) {
        feedback.html(backenderror.val());
        feedback.css("display", "block");
    }

    submitButton.on('click', function (e) {
        if (email.value && password.val() && confirm.val()) {
            var errors = [];
            //Check email
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!filter.test(email.value)) {
                errors.push(`'${email.value}' is not a valid email address`);
            }
            //Check Password
            if (password.val() != confirm.val()) {
                errors.push(`Passwords do not Match`);
            }
            if (password.val().length < 8 || confirm.val().length < 8) {
                errors.push(`Passwords must be atleast 8 characters long`);
            }

            if (errors.length > 0) {
                feedback.html(errors.join("<br/>"));
                feedback.css("display", "block");
                setTimeout(function () {
                    feedback.html();
                    feedback.css("display", "none");
                }, 5000);
            }
            else {
                // @TODO  Before confirming payment, check to ensure that amount to be payed doesnt exceed the debt
                form.submit();
            }
        } else if (email.value.length == 0 || password.val().length == 0 || confirm.val().length == 0) {
            feedback.html("Fields cannot be empty");
            feedback.css("display", "block");
            setTimeout(function () {
                feedback.html();
                feedback.css("display", "none");
            }, 5000);
        }
    });
})();
