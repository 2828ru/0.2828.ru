'use strict';
(function(w,d,l){
 var
     ul = d.querySelector('ul#m')
   , lastClickedLI = null;
 ul.onmousedown = function() { return !1; };
 function tap(e){
var t=e.target,
a=t.getAttribute('data-mx');
if(a){
show(d.getElementById(a));
 e.preventDefault();
return !1;
}
   /*
if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey){
console.log(t);
// var newWin = w.open("about:blank", "hello", "width=200,height=200");
// newWin.d.write("Привет, мир!");
}
   */
   if('LI'===t.tagName){
     /*
     // возможно, клик был внутри списка UL, но вне элементов LI
     // if (t.tagName != "LI") return;
     while (t.tagName != "LI"){
       t=t.parentNode;
       if(t.tagName === "BODY") return !1;
     }
     */
     if (event.metaKey || event.ctrlKey) selectSingle(t);
     else if (event.shiftKey) selectFromLast(t);
     else toggleSelect(t);
     lastClickedLI = t;
     return !1;
   }else if('B'===t.tagName){
     t=t.parentNode;
     if (event.metaKey || event.ctrlKey) selectSingle(t);
     else if (event.shiftKey) selectFromLast(t);
     else toggleSelect(t);
     lastClickedLI = t;
   }
}//:tap
d.addEventListener('click', tap, true);
   // ФУНКЦИИ ВЫДЕЛЕНИЯ
   function deselectAll() {
     for (var i = 0; i < ul.children.length; i++) {
       ul.children[i].classList.remove('selected');
     }
   }
   function toggleSelect(li) {
     li.classList.toggle('selected');
   }
   function selectSingle(li) {
     deselectAll();
     li.classList.add('selected');
   }
   function selectFromLast(target) {
     var startElem = lastClickedLI || ul.children[0];
     var isLastClickedBefore = startElem.compareDocumentPosition(target) & 4;
     if (isLastClickedBefore) {
       for (var elem = startElem; elem != target; elem = elem.nextElementSibling) {
         elem.classList.add('selected');
       }
     } else {
       for (var elem = startElem; elem != target; elem = elem.previousElementSibling) {
         elem.classList.add('selected');
       }
     }
     elem.classList.add('selected');
   }
})(window,document,'KALININ');