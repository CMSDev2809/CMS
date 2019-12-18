$(document).ready(function() {
    $("#form").on('click', '#submit', function () {
        var name1 = $("#name").val();
        var email1 = $("#email").val();
        var message1 = $("#message").val();
        $("#returnmessage").empty(); // To empty previous error/success message.
        if (name1 === '' || email1 === '') {
            alert("Please Fill Required Fields");
        } else {
            const obj = { name: name1, email: email1, message: message1 }
            $.ajax({
                type: 'post',
                url: 'https://compliancemon.herokuapp.com/moonlighting',   
                data: JSON.stringify(obj),
                contentType: 'application/json'
            }).done(function() {
                $("#returnmessage").append("Your Query has been received, We will contact you soon.")
                $("#form")[0].reset();
            })
        }
    })    
});