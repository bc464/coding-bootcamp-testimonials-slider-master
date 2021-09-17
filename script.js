let tanyaImg =  document.querySelector(".img-tanya");
    let johnImg = document.querySelector(".img-john")
    let tanyaQuote = document.querySelector(".quote-tanya")
    let johnQuote = document.querySelector(".quote-john");
 function myFunction() {
  if(tanyaImg.style.display === "grid") {
      tanyaImg.style.display = "none";
      johnImg.style.display= "grid";
      tanyaQuote.style.display= "none";
      johnQuote.style.display = "grid";
     } else {
      tanyaImg.style.display = "grid";
      johnImg.style.display= "none";
      tanyaQuote.style.display= "grid";
      johnQuote.style.display = "none";
     }
};