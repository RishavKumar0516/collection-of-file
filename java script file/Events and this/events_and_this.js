function change_image(store){
document.getElementById('preview').innerHTML=store.alt;
document.getElementById('preview').style.backgroundImage="url("+store.src+")";

}
function undo(){
document.getElementById('preview').innerHTML="Hover over an image to display here.  "; 
document.getElementById('preview').style.backgroundImage="url('')";
}