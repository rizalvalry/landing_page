// JavaScript source code
//Duration Panel
$(document).ready(function () {
    setTimeout(function () {
        $('#paint').fadeOut(5000);
    }, 16000);
});

//Modal Confirm Email
$(document).ready(function () {
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });
});

//Validation Email
function myJS() {
    var x = document.getElementById("MyValidasi").value + ", cermati.com akan segera mengirimkan info terbaru untuk kamu";
    document.getElementById("MyNewsletter").innerHTML = " Terimakasih " + x;

    if (x != 0) {
        setTimeout(function () {
            location.reload()
        }, 3000);
    }
}

//Contact
$(document).ready(function () {
    $("#whatsapp").click(function () {
        $("#myWa").modal();

        document.getElementById("questContact").innerHTML = "You will be directed to the website creator's contact ?";
    });
});


function getLinkWhatsapp() {
    var numb = "6285781571742";
    var message = "halo";

    document.onclick = function getLinkWhatsapp() {
        window.open("https://api.whatsapp.com/send?phone=" + numb + '&text=' + message + '%20')
        location.reload()
    }
}

//copyright
$(document).ready(function () {
    var glyp = "&copy;";
    var right = " 2019";
    var name = " <span style='color:#ff0000'>Muhamad Rizal.</span>";
    var reserv = " All rights reserved";

    document.getElementById("copyRight").innerHTML = glyp + right + name + reserv;

    $(".copyRight").hover(function () {
        $(this).css("cursor", "pointer");
        });
       
    $("#copyRight").click(function () {
        alert("selamat datang di valryhouse.com");
        if (alert) {
            window.open("https://valryhouse.com")
        }
    });
});

//Close Panel
$(document).ready(function () {
    $("#button-hide").click(function () {
        $(".fixed").hide("slow");
    });
});

//Terms & Condition 'Got It'
$(document).ready(function () {
    $('.swal').click(function () {
        $('.alert').show()
        setTimeout(function () {
            $('.alert').fadeOut(5000);
        }, 300);

        $('.navbar').hide()
    });
});
