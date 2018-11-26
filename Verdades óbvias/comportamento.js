function s(str){
    return document.querySelector(str);
}
 
function toggle(n){
  var el = s('#el'+n);
 
  if( el.style.display == 'none' || el.style.display == '' ){
      el.style.display = 'inline';
  }
    else{
      el.style.display = 'none';
  }
}
 
s('#toggle1').onclick = function(){ toggle(1); }
s('#toggle2').onclick = function(){ toggle(2); }
s('#toggle3').onclick = function(){ toggle(3); }
s('#toggle4').onclick = function(){ toggle(4); }
s('#toggle5').onclick = function(){ toggle(5); toggle(6) }
s('#toggle7').onclick = function(){ toggle(7); }
