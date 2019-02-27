function edit() {
   var a = document.getElementById('a-val').contentEditable = true;
   var b = document.getElementById('b-val').contentEditable = true;
   var c = document.getElementById('c-val');

   a =document.getElementById('a-val').innerHTML;
   b =document.getElementById('b-val').innerHTML;

   console.log(a + b);

   c = +a + +b ;

   document.getElementById('c-val').innerHTML = c;
}






