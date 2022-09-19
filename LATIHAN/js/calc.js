var tambah = function() {
  //tangkap id form
  var form = document.getElementById('calc');
  var a1 = parseFloat(form.angka1.value);
  var a2 = parseFloat(form.angka2.value);
  var total = a1 + a2; //rumus
  form.hasil.value = total; //penempatan hasil
}
function kurang() {
  //tangkap id form
  var form = document.getElementById('calc');
  var a1 = parseFloat(form.angka1.value);
  var a2 = parseFloat(form.angka2.value);
  var total = a1 - a2; //rumus
  form.hasil.value = total; //penempatan hasil
}
function pangkat() {
  //tangkap id form
  var form = document.getElementById('calc');
  var a1 = parseFloat(form.angka1.value);
  var a2 = parseFloat(form.angka2.value);
  var total = Math.pow(a1, a2); //rumus
  form.hasil.value = total; //penempatan hasil
}
