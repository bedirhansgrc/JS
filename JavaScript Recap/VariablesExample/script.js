let suankiyil = new Date().getFullYear();

let isim1 = "Ada Bilgi";
let dy1 = 2012;
let not1 = 70;
let not2 = 70;
let not3 = 80;
let ogr1avg = (not1 + not2 + not3) / 3;
let ogr1yas = suankiyil - dy1;
let basarilimi1 = (ogr1avg > 50);

let isim2 = "Yiğit Bilgi";
let dy2 = 2010;
let not4 = 40;
let not5 = 40;
let not6 = 50;
let ogr2avg = (not4 + not5 + not6) / 3;
let ogr2yas = suankiyil - dy2;
let basarilimi2 = (ogr2avg > 50);
 


console.log("Ada'nın Yaşı =" ,ogr1yas);
console.log("Yiğit'in Yaşı =" ,ogr2yas);
console.log("Ada'nın Not Ortalamasi =" ,parseInt(ogr1avg));
console.log("Yiğit'in Not Ortalamasi =" ,parseInt(ogr2avg));
console.log(basarilimi1);
console.log(basarilimi2);


