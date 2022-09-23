let hasil = document.getElementById('hasil');
let no = 1;

class Gempa {
  constructor(lokasi, skala) {
    this.lok = lokasi;
    this.skal = skala;
  }

  dampak() {
    if (this.skal <= 2) return (this.dampakgempa = 'Tidak Terasa');
    if (this.skal <= 4) return (this.dampakgempa = 'Bangunan Retak-Retak');
    if (this.skal <= 6) return (this.dampakgempa = 'Bangunan Roboh');
    if (this.skal > 6) return (this.dampakgempa = 'Bangunan Roboh dan Berpotensi Tsunami');
    return (this.dampakgempa = 'Tidak Ada Data');
    // return this.dampakgempa;
  }

  infoGempa() {
    hasil.innerHTML += ` <tr>
                                            <td>${no++}</td>
                                            <td>${this.lok}</td>
                                            <td>${this.skal}</td>s
                                            <td>${this.dampak()}</td>
                                            </tr>
                                            `;
  }
}

gem1 = new Gempa('Mentawai-Sumatera Barat', 6);
gem2 = new Gempa('Pacitan-Jawa Timur', 5);
gem3 = new Gempa('Mamberamo Tengah-Papua', 6);
gem4 = new Gempa('Maluku Tenggara Barat', 7);
gem5 = new Gempa('Maluku Barat Daya', 8);
gem6 = new Gempa('Seluma-Bengkulu', 3);
gem7 = new Gempa('Kaur-Bengkulu', 4);
gem8 = new Gempa('Mukomuko-Bengkulu', 5);
gem9 = new Gempa('Gunung Kidul-Yogyakarta', 1);
gem10 = new Gempa('Niasutara-Sumatera Utara', 4);

let kumpulanGempa = [gem1, gem2, gem3, gem4, gem5, gem6, gem7, gem8, gem9, gem10];

for (let g in kumpulanGempa) {
  kumpulanGempa[g].infoGempa();
}

/*gem1.infoGempa();
gem2.infoGempa();
gem3.infoGempa();
gem4.infoGempa();
gem5.infoGempa();
gem6.infoGempa();
gem7.infoGempa();
gem8.infoGempa();
gem9.infoGempa();
gem10.infoGempa();*/
