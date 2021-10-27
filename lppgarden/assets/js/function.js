/* Variable */
//var nama = "yudi" (variable dalam js lama)
//$nama = "yudi"; (variable dalam php)

let nama_depan = "yudi";
let nama_belakang = "utomo";
let nama_lengkap = nama_depan + " yudi " + nama_belakang;
// let nama_lengkap = '${nama_depan}' '${nama_belakang}';

let barang = 80;
let jumlah = 100;
let total = barang + jumlah;

/* Constant */

const country = "Indonesia";
const database =  "Pelatihan";

/* Alert */

let cookie;
cookie = "Siapkan";

let cookie2 = "Siapkan";

//alert(cookie);
console.log("total barang " + total);
document.write("Test Dulu");


/* Conditional */

/*if (nama_lengkap = "yudi") {
	alert ("Selamat Datang, " + nama_lengkap);
} else {
	alert("Kamu Siapa?"); 
}*/

/* let nama = prompt("Siapakah nama anda?", '');

if (nama == nama_lengkap) { 
	alert("Selamat Datang, " + nama_lengkap); 
} else {
	alert("Maaf, Anda siapa?")
} */

/* Loop */
/*
for (let i = 0; i <= 10; i++) {
	console.log("loop 1 " + i);
}

let j = 10;
while (j <= 20) {
	console.log("loop 2 " + j);
	j++;
}

let k = 20
do {
	console.log("loop 3 " + k);
	k++;
} while (k <= 30);
*/
/* Function */
/*
nama_lengkap = null;

function greeting() {
	if (nama_lengkap) {
		alert("User aman, bisa masuk web.");
	} else {
		alert("Perhatian! User tidak aman!");
	}
}

greeting();
*/


/*function login(username, password) {
	if (username && password) {
		console.log("Selamat datang, ");
		console.log("Username " + username);
		console.log("Password " + password);
	} 
	else if (username || password) {
		console.log("Username atau Password salah!"); 
	} 
	else {
		console.log("Anda belum login!");
	}
}

let username = "yudi";
let password = "12345";
login(username, password); */

function luas_segitiga(alas, tinggi) {
	let luas = alas * tinggi / 2;
	return luas;
}
 let alas = 10;
 let tinggi = 5; 
 let luas = luas_segitiga(alas, tinggi);

console.log(luas);

/*Stuktur Data*/
let dataMhs = ["Yudi", "Yuda", "Yoda"];

let ambilDataMhs = dataMhs{2};
console.log(ambilDataMhs);

let biodaraMhs = {
	nama: "a",
	tempat_lahir: "b",
	negara: "c",
};

let biodaraMhs2 = {
	nim: "11"
	nama: "a",
	tempat_lahir : "b",
	negara: "c" 
};




























