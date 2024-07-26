
function Media1(x) {
    
    if (x.matches) { // If media query matches
        window.onscroll = function () { myFunction() };

        function myFunction() {
            if (document.documentElement.scrollTop > 2000) {
                document.getElementById("compress").style.transition = "1s";
                document.getElementById("compress").style.transform = "scale(1)";
                document.getElementById("compress").style.transform = "1";
                document.getElementById("addons").style.transition = "1s";
                document.getElementById("addons").style.transform = "scale(1)";
                document.getElementById("addons").style.opacity = "1";
                document.getElementById("vs-code").style.transform = "translateX(100%)";
                document.getElementById("vs-code").style.transition = "1s";
                document.getElementById("frame-img").style.top = "90px";
                document.getElementById("frame-img").style.width = "105%";
                document.getElementById("frame-img").style.transition = "1.5s";
                document.getElementById("frame-2").style.display = "none";
                document.getElementById("app").style.display = "none";
                document.getElementById("frame-3").style.display = "none";
                document.getElementById("frame-4").style.display = "none";
                document.getElementById("addon-1").style.opacity = "0";
                document.getElementById("addon-2").style.opacity = "0";
                document.getElementById("addon-3").style.opacity = "0";
                document.getElementById("addon-4").style.opacity = "0";
                document.getElementById("addon-1").style.transform = "translateY(100%)";
                document.getElementById("range").style.display = "none";
                document.getElementById("range-move").style.transform = "translateX(0%)";
                document.getElementById("range-move").style.top = "80px";
                document.getElementById("box-1").style.transition = "1s";
                document.getElementById("box-1").style.opacity = "0";
                document.getElementById("box-1").style.transform = "translateY(-1000px)";
                document.getElementById("box-2").style.transform = "translateY(00px)";
                document.getElementById("box-2").style.transition = "1s";
                document.getElementById("box-2").style.opacity = "1";
                document.getElementById("box-3").style.position = "absloute";
                document.getElementById("box-3").style.transform = "translateY(1000px)";
                document.getElementById("box-3").style.opacity = "0";
            }
            if (document.documentElement.scrollTop < 2000) {
                document.getElementById("frame-img").style.position = "sticky";
                document.getElementById("box-2").style.transform = "translateY(1000px)";
                document.getElementById("box-2").style.transition = "1s";
                document.getElementById("box-2").style.opacity = "0";
                document.getElementById("box-1").style.transform = "translateY(00px)";
                document.getElementById("box-1").style.transition = "1s";
                document.getElementById("box-1").style.opacity = "1";
                document.getElementById("box-4").style.position = "absolute";
                document.getElementById("box-4").style.transform = "translateY(1000px)";
                document.getElementById("box-4").style.opacity = "0";

            }
            if (document.documentElement.scrollTop < 2200) {
                document.getElementById("vs-code").style.transform = "translateX(0px)";
                document.getElementById("frame-img").style.width = "90%";
            }
            if (document.documentElement.scrollTop > 2500) {
                document.getElementById("frame-2").style.display = "block";
                document.getElementById("box-2").style.position = "sticky";
            }
            if (document.documentElement.scrollTop > 3100) {
                document.getElementById("frame-3").style.display = "block";
            }
            if (document.documentElement.scrollTop > 3300) {
                document.getElementById("box-2").style.position = "absolute";
                document.getElementById("box-2").style.transform = "translateY(-1000px)";
                document.getElementById("box-2").style.opacity = "0";
                document.getElementById("box-3").style.position = "sticky";
                document.getElementById("box-3").style.transform = "translateY(00px)";
                document.getElementById("box-3").style.opacity = "1";
                document.getElementById("frame-4").style.display = "block";
                document.getElementById("range").style.display = "block";
                document.getElementById("addon-1").style.transition = ".8s";
                document.getElementById("addon-1").style.transform = "translatey(0%)";
                document.getElementById("addon-1").style.opacity = "1";
                document.getElementById("box-4").style.position = "absolute";
                document.getElementById("box-4").style.transform = "translateY(1000px)";
                document.getElementById("box-4").style.opacity = "0";
            }
            if (document.documentElement.scrollTop > 3600) {
                document.getElementById("addon-2").style.transition = ".8s";
                document.getElementById("addon-2").style.transform = "translatey(0%)";
                document.getElementById("addon-2").style.opacity = "1";
            }
            if (document.documentElement.scrollTop > 3900) {
                document.getElementById("addon-3").style.transition = ".8s";
                document.getElementById("addon-3").style.transform = "translatey(0%)";
                document.getElementById("addon-3").style.opacity = "1";
            }
            if (document.documentElement.scrollTop > 4200) {
                document.getElementById("addon-4").style.transition = ".8s";
                document.getElementById("addon-4").style.transform = "translatey(0%)";
                document.getElementById("addon-4").style.opacity = "1";
                document.getElementById("app").style.opacity = "1";


            }
            if (document.documentElement.scrollTop > 4500) {
                document.getElementById("compress").style.transform = "scale(0)";
                document.getElementById("compress").style.transform = "0";
                document.getElementById("addons").style.transform = "scale(0)";
                document.getElementById("addons").style.opacity = "0";
                document.getElementById("frame-img").style.top = "150px";
                document.getElementById("app").style.display = "block";
                // document.getElementById("code-1").style.opacity = "0";
                document.getElementById("vs-code").style.transform = "translateX(-50%)";
                document.getElementById("frame-img").style.width = "85%";
                document.getElementById("range-move").style.transform = "translateX(-90%)";
                document.getElementById("range-move").style.top = "120px";
                document.getElementById("box-3").style.transform = "translateY(-1000px)";
                document.getElementById("box-3").style.opacity = "0";
                document.getElementById("box-4").style.position = "sticky";
                document.getElementById("box-4").style.transform = "translateY(00px)";
                document.getElementById("box-4").style.opacity = "1";
            }

            if (document.documentElement.scrollTop > 10000) {
                document.getElementById("graph").style.transition = "1s";
                document.getElementById("graph").style.transform = "translateY(450%)";
                document.getElementById("graph").style.right = "38%";

            }
            if (document.documentElement.scrollTop < 10000) {
                document.getElementById("graph").style.transform = "translateY(0%)";
                document.getElementById("graph").style.right = "25%";

            }
        };
    } else {
        document.getElementById("vs-code").style.transform = "translateX(-100%)";
    }
}

// Create a MediaQueryList object
var x = window.matchMedia("(min-width:1000px)")

// Call listener function at run time
Media1(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
    Media1(x);
});


