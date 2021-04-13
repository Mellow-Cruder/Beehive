function openNav() {
  document.getElementById("Sidenav").style.width = "50%";
  document.getElementById("mask").style.width = "50%";
}

function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
  document.getElementById("mask").style.width = "0";
}
<script type="text/javascript">
function validateEmail(theForm) {
if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(theForm.email-id.value)){
return(true);
}
alert("Invalid e-mail address! Please enter again carefully!.");
return(false);
}
</script>

Body:

<form onSubmit="return validateEmail(this);" action="">
E-mail Address:
<input type="text" name="emailid" />
<input type="submit" value="Submit" />
<input type="reset" value="Reset" />
</form>
<script type="text/javascript">
function f1() {
  if(document.all) { return false; }
}
function f2(e) {
  if(document.layers || (document.getElementById &! document.all)) {
    if(e.which==2 || e.which==3) { return false; }
  }
}
if(document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = f1;
}
else {
  document.onmouseup = f2;
  document.oncontextmenu = f1;
}
document.oncontextmenu = new function("return false");
</script>