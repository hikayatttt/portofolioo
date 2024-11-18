window.onscroll = function() {scrollFunction()} ;

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("navbar").style.top = "0px" ;
    } 
    else {
        document.getElementById("navbar").style.top = "-50px";
    }
};
