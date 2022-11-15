var i, tablinks, tabcontent;
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener(
    "click",
    function (e) {
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
        e.target.classList.add("active");
      }
      var idActive = document.getElementById(e.target.innerHTML);
      idActive.style.display = "block";
    },
    false
  );
}
