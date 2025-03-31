const heading = document.getElementsByClassName('btn');

for( var i = 0; i < heading.length; i++) {
    heading[i].addEventListener("click", function() {
        this.classList.toggle('active')
        var desc = this.nextElementSibling;
    
    if(desc.style.display === 'block') {
        desc.style.display = '';
    } else {
        desc.style.display = 'block';
    }

    });
}