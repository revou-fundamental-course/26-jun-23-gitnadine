<script> 
    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs((slideIndex += n));
    }

    function showDivs(n) {
        var i;
        var images = document.getElementsByClassName("img");
        if (n > images.length) slideIndex = 1;
        else if (n < 1) slideIndex = images.length;
        
        for (i = 0; i < images.length; i++){
            images[i].style.display = "none";
        }

        images[slideIndex -1].style.display = "block";
    }

    setInterval(() => {
        plusDivs(1);
    }, 5000);
</script>