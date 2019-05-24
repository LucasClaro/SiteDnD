function readURL(input) {
    var ext = input.files[0]['name'].substring(input.files[0]['name'].lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imgAparencia').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    } else {
        $('#imgAparencia').attr('src', '/assets/no_preview.png');
    }    
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#imgAparencia").addEventListener("load", mudarTxtArea);
})

function mudarTxtArea(){
    document.querySelector("#historia").style.height = Math.floor(document.querySelector("#ImgBorda").offsetHeight) + "px";
}