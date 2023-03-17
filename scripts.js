/* Add your JavaScript to this file */
window.onload = function()
{
    var myform = document.querySelector('form');

    myform.onsubmit = function(e){

        e.preventDefault();

        var email = document.querySelector('#email');

        clearMessage();


        if (email.value.trim() === "") {
            showError("email-error", "Please enter a valid email address.")
            e.preventDefault();
            return false;
        };

        document.querySelector(".message").classList.add("email-success");
        document.querySelector(".message").innerHTML = 'Thank you! Your email address ${myform.email.value} has been added to our mailing list!';

        
        return false;

        
    };



function clearMessage() {
    var elementsWithMessage = document.querySelectorAll('.message');
    //console.log(elementsWithErrors);
    for (var x = 0; x < elementsWithErrors.length; x++) 
    {
      elementsWithMessage[x].setAttribute('class', '');
      elementsWithMessage[x].parentNode.removeChild(elementsWithMessage[x].nextElementSibling);
      //console.log(elementsWithErrors[x].nextElementSibling);
    }
}



    function showError(errorElement, errorMessage){
        document.querySelector(".message"+errorElement).classList.add("email-error");
        document.querySelector(".message"+errorElement).innerHTML = errorMessage;
    }

};



  
