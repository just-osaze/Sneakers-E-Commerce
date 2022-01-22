function zoom(preview){
  document.getElementById('image').src = preview.src.replace("_th", "");
}

function unDo(preview){
  document.getElementById('image').src = preview.src.replace('../images/image-product-1.jpg');
}

// Button counter
count = 0

function reverseCounter() {
  let counter = document.getElementById('counter');  
  
  if (count > 0) {
    count -=1        
  }
  
  counter.innerHTML = + count;
  console.log('yes')
}

function forwardCounter() {
  let counter = document.getElementById('counter');
  count += 1

  counter.innerHTML = + count;
  console.log('clicked')
}

