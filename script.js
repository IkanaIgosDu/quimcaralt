    window.onload = function () {
        var menu = this.document.getElementById('menu');
        
        menu.onclick = function () {
            var navDisp = document.querySelector('.navbar');
            if (navDisp.className === "navbar"){
                navDisp.classList.add("showUp");
            }
            else { 
                navDisp.className = "navbar";
            }
        }
    }