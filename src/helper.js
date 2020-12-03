export function ScrollToDiv(id){
    console.log(id);
    var offsetTop  = document.getElementById(id).offsetTop;
    window.scrollTo({
        top: offsetTop, 
        behavior: "smooth"
    });
}