$(document).ready(function () {
    $(window).on('scroll', function () { 

        var link = $('.navbar a.dot');
        var top = $(window).scrollTop();

        $('.sec').each(function () { 
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset() - 150;
            if (top >= offset && top < offset + height) {
                link.removeClass('active');
                $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
            }
        });


    });


});


let name = prompt("Enter your name!");

alert(`Welcome to my website ${name} !`)

// document.getElementById("currentTime").innerHTML = Date();

const realtimeClock = () => { 
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    
    
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    
    document.getElementById("currentTime").innerHTML = `${hours}   :   ${minutes}   :   ${seconds}`;
    var t = setTimeout(realtimeClock, 500);
    
};



document.getElementById("CV-download").onclick = function () {
   alert("CV is downloading.")
};
 
document.getElementById("cv-btn").onclick = function () {
   alert("CV is downloading.")
};
 

function mouseOver() {
    console.log(`Alex photo`);
}

function handleChange(event){
    console.log(event.target.value)
}


// const input = document.querySelectorAll(".inputBox");

// for (let i = 0; i < input.length; i++){
//     function changeColor() {
//         input[i].style.color = "white";
//     };
// }


const characterLength = () => { 
    let minlength = 2;
    let maxlength = 20;
    let inputBox = document.getElementsByClassName('inputBox');
    let info = document.getElementsByClassName("error");
    

    for (let i = 0; i < inputBox.length; i++) {

        for (let i = 0; i < info.length; i++) {
            if (inputBox[i].value.length < minlength ||  inputBox[i].value.length > maxlength) {
            
                info[i].innerHTML = `enter between ${minlength} to ${maxlength} characters!`;
                info[i].style.color = "red";

            }
            else {

                info[i].innerHTML = "acceptable!";
                info[i].style.color = "green";
            }
        }     
    }
};

var form = document.getElementById("msgForm")

form.addEventListener('submit', (event) => {
    event.preventDefault();
}); 