// Contoh penggunaan if, else, dan nested if
let nilai = 110;

if (nilai >= 50) {
  console.log("Nilai Anda baik");
} else if (nilai >= 30) {
  console.log("Nilai Anda Buruk");
} else if (nilai >= 60) {
  console.log("Nilai Anda baik");
} else {
  console.log("Nilai Anda buruk");
}

// Contoh penggunaan switch case
let hari = "kamis";

switch (hari) {
  case "sabtu":
    console.log("Hari ini adalah Sabtu");
    break;
  case "Selasa":
    console.log("Hari ini adalah kamis");
    break;
  case "Rabu":
    console.log("Hari ini adalah minggu");
    break;
  default:
    console.log("Hari ini bukan hari gajian");
}

// Contoh penggunaan for statement
for (let i = 2; i <= 6; i++) {
  console.log("Perulangan ke-" + i);
}

// Contoh penggunaan while loop
let angka = 9;
while (angka <= 11) {
  console.log("Nilai angka: " + angka);
  angka++;
}

// Contoh penggunaan do while loop
let counter = 11;
do {
  console.log("Perulangan do while ke-" + counter);
  counter++;
} while (counter <= 15);

// Contoh penggunaan function
function tambah(a, b) {
  return a + b;
}

let hasilTambah = tambah(22, 30);
console.log("Hasil penjumlahan: " + hasilTambah);
