function sendEmail()
{
  $('#send-button').addClass('disabled');

  sendMessage(
    {
      'To': $('#compose-to').val(),
      'Subject': $('#compose-subject').val()
    },
    $('#compose-message').val(),
    composeTidy
  );

  return false;
}