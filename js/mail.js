$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var name    = document.getElementById('template-contactform-name')
    var email   = document.getElementById('template-contactform-email')
    var message = document.getElementById('template-contactform-message')
    var service = document.getElementById('template-contactform-service')

    if (!name.value || !email.value || !message.value) {
      alertify.error("Please check your entries");
      return false;
    } else {
      $.ajax({
        method: 'POST',
        url: '//formspree.io/rahul@webmasons.co',
        data: $('#contact-form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
      alertify.success("Message sent");
    }
  });
});