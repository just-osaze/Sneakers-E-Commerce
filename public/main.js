function zoom1(preview){
  document.getElementById('image').src = preview.src.replace("_th", "");
  document.getElementById('image1').style.opacity = "0.5";
  document.getElementById('image1').style.border = "thick solid #ff7d1a";

  document.getElementById('image2').style.border = "none";
  document.getElementById('image3').style.border = "none";
  document.getElementById('image4').style.border = "none";

  document.getElementById('image2').style.opacity = "100";
  document.getElementById('image3').style.opacity = "100";
  document.getElementById('image4').style.opacity = "100";
}
function zoom2(preview){
  document.getElementById('image').src = preview.src.replace("_th", "");
  document.getElementById('image2').style.opacity = "0.5";
  document.getElementById('image2').style.border = "thick solid #ff7d1a";

  document.getElementById('image1').style.border = "none";
  document.getElementById('image3').style.border = "none";
  document.getElementById('image4').style.border = "none";

  document.getElementById('image1').style.opacity = "100";
  document.getElementById('image3').style.opacity = "100";
  document.getElementById('image4').style.opacity = "100";
}
function zoom3(preview){
  document.getElementById('image').src = preview.src.replace("_th", "");
  document.getElementById('image3').style.opacity = "0.5";
  document.getElementById('image3').style.border = "thick solid #ff7d1a";

  document.getElementById('image1').style.border = "none";
  document.getElementById('image2').style.border = "none";
  document.getElementById('image4').style.border = "none";

  document.getElementById('image1').style.opacity = "100";
  document.getElementById('image2').style.opacity = "100";
  document.getElementById('image4').style.opacity = "100";

}
function zoom4(preview){
  document.getElementById('image').src = preview.src.replace("_th", "");
  document.getElementById('image4').style.opacity = "0.5";
  document.getElementById('image4').style.border = "thick solid #ff7d1a";

  document.getElementById('image1').style.border = "none";
  document.getElementById('image2').style.border = "none";
  document.getElementById('image3').style.border = "none";

  document.getElementById('image1').style.opacity = "100";
  document.getElementById('image2').style.opacity = "100";
  document.getElementById('image3').style.opacity = "100";

}


// function zoom(preview){
//   document.getElementById('image').src = preview.src.replace("_th", "");
//   document.getElementById('preview').style.opacity = "0.5";
// }

// Button counter
count = 0

function reverseCounter() {
  let counter = document.getElementById('counter');  
  
  if (count > 0) {
    count -=1        
  }
  
  counter.innerHTML = + count;
}

function forwardCounter() {
  let counter = document.getElementById('counter');
  count += 1

  counter.innerHTML = + count;
}

