// JavaScript source code
$(document).ready(function () {
    setTimeout(function () {
        $('#paint').fadeOut(5000);
    }, 6000);
});

$(document).ready(function () {
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });
});

$(document).ready(function () {
    $("#button-hide").click(function () {
        $(".fixed").hide("slow");
    });
});

function myJS() {
    var x = document.getElementById("MyValidasi").value + ", cermati.com akan segera mengirimkan info terbaru untuk kamu";
    document.getElementById("MyNewsletter").innerHTML = " Terimakasih " + x;

    if (x != 0) {
        setTimeout(function () {
            location.reload()
        }, 1500);
    }
}