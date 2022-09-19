function hitung(tombol) {
  var form = document.getElementById('calc');
  var a1 = parseFloat(form.angka1.value);
  var a2 = parseFloat(form.angka2.value);

  switch (tombol) {
    case 'tambah':
      if (isNaN(a1) || isNaN(a2)) {
        alert('Harap masukkan angka!!');
      } else {
        var total = a1 + a2;
        form.hasil.value = total;
      }
      break;
    case 'kurang':
      if (isNaN(a1) || isNaN(a2)) {
        alert('Harap masukkan angka!!');
      } else {
        var total = a1 - a2;
        form.hasil.value = total;
      }
      break;
    case 'kali':
      if (isNaN(a1) || isNaN(a2)) {
        alert('Harap masukkan angka!!');
      } else {
        var total = a1 * a2;
        form.hasil.value = total;
      }
      break;
    case 'bagi':
      if (isNaN(a1) || isNaN(a2)) {
        alert('Harap masukkan angka!!');
      } else {
        var total = a1 / a2;
        form.hasil.value = total;
      }
      break;
    case 'pangkat':
      if (isNaN(a1) || isNaN(a2)) {
        alert('Harap masukkan angka!!');
      } else {
        var total = Math.pow(a1, a2);
        form.hasil.value = total;
      }
      break;

    default:
      break;
  }
}
