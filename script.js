var $signUpForm = $('.sign_up_form');

$('.sign_up').on('click', function (event) {
  event.preventDefault();

  $signUpForm.dialog({
    buttons: {
      "Submit": function () {
        $signUpForm.get(0).submit();
      },
      "Reset": function () {
        $signUpForm.get(0).reset();
        //$signUpForm[0].reset();
      },
      "Close": function () {
        $signUpForm.dialog('close');
      }
    },
    modal: true,
    title: "Sign Up"
  });
});

$('.menu').menu();