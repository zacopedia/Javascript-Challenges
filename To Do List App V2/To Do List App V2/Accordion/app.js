var heading = document.getElementsByClassName('btn');

for( var i = 0; i < heading.length; i++) {
    heading[i].addEventListener("click", function() {
        this.classList.toggle('active')
        var desc = this.nextElementSibling;
    
    if(desc.style.display) {
        desc.style.display = null;
    } else {
        desc.style.display = 'block';
    }

    });
}