
window.addEventListener('load', function()
{
    var submit = document.querySelector(".newsletter button");
    var feedback = document.querySelector(".message");
    const email = document.getElementById("email");
    var reGex = /^\S+@\S+\.\S+$/i;

    email.textContent = "";


    submit.addEventListener('click', function(event){
        event.preventDefault();
        var userEmail = email.value;

        if(userEmail === "" || !reGex.test(userEmail))
        
        {

            feedback.textContent = "Please enter a valid email address";
        }
        
        else
        
        {

            feedback.textContent = `Thank You! Your email address ${userEmail} has been added to our mailing list!`;
        }
    });
});
