// Topshiriq Amaliyot, 1-qism. Ilova yaratishni boshlaymiz;

/* Darsga topshiriq:
1) o'zgaruvchan numberOfNews yarating va foydalanuvchidan savolga javobini qo'ying:
"Siz qancha yangilik ko'rdingiz?"
2) personalNewsDB obyektini yarating va unga quyidagi xususiyatlarni qo'ying:
- count - birinchi savolga javob shu erda beriladi
- news - bu ob'ektga bo'sh ob'ektni qo'ying
- actors - shuningdek, bo'sh ob'ekt joylashtiradilar
- genres - bu erda bo'sh massivni qo'ying
- privat - bu xususiyatga mantiqiy (boolean) false qiymatini qo'ying
3) foydalanuvchiga ikkita savol bering:
  - "Oxirgi ko'rgan yangiliklarizdan biri?"
  - 'Unga qancha baho bergan bo'lar edingiz?'
Javoblar alohida o'zgaruvchilarga joylashtirilishi kerak.
Yangiliklar ob'ektiga javoblarni quyidagi shaklda yozing:
  news: {
    'BBC': '8.1'
  }
// ======================Amaliyot-2;========================================//

/* Darsga topshiriq:
1) Tsiklni yordamida foydalanuvchiga yangiliklar haqidagi savollarni avtomatlashtirish
2) Foydalanuvchi javobni bo'sh satr sifatida qoldirmasligi uchun shunday qiling,
javobni bekor qilish yoki 50 belgidan uzunroq yangilik nomini kiritish. Agar bu sodir bo'lsa -
foydalanuvchini yana savollarga qaytaring. (Har qanday satrga quyidagicha kirish mumkin
str.length - va uzunligini oling)
3) Shartlardan foydalanib, personalMovieDB.count-ni tekshiring, agar u 10 dan kam bo'lsa - xabarni ko'rsating
"Juda oz sonli yangiliklar o'qilibdi", agar 10 dan 30 gacha bo'lsa - "Siz klassik tomoshabinsiz", agar ko'proq bo'lsa -
- Siz yangilklar ishqibozisiz. Va agar u biron bir variantga mos kelmasa - "Xato yuz berdi"
4) Amaliy mashg'ulot va tsiklni yana ikkita usulda qayta yozing  
Konsolda hamma narsa xatosiz ishlashini tekshiring */

// ===============================Amaliyo-3;===================================//

/* Darsga topshiriq:
1) Darsga muvofiq topshiriqning birinchi qismini takrorlang
2) Privat xususiyatlarini tekshiradigan showMyDB funktsiyasini yarating. Agar pozitsiya false turgan
bo'lsa dasturning asosiy ob'ektini konsolga ko'rsatadi
3) writeYourGenres funktsiyasini yarating, unda foydalanuvchi savolga 3 marta javob beradi
"Sizning sevimli janringiz - $ {ketma-ket raqam}". Har bir javob ma'lumotlar genres qatoriga yoziladi
P.S. Funksiyalarni chaqirish shart emas */


"use strict";

let numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");
let personalNewsDB = {
    count: numberOfNews,
    news: {},
    actors: {},
    genres: [],
    privat: false,
}

for(let i = 0; i < 2; i++){
  
  let savolA = prompt("Oxirgi ko'rgan yangiliklarizdan biri?"),
    savolB = prompt("Unga qancha baho bergan bo'lar edingiz?");
  if (savolA != "" && savolB != "" && savolA != null && savolB != null && savolA.length < 50) {
      personalNewsDB.news[savolA] = savolB;
      console.log("To'g'ri");
  } else {
    console.log("Xato");
    i--;
  }
}

if (personalNewsDB.count < 10) {
  console.log("Juda oz sonli yangiliklar o'qilibdi");
} else if (personalNewsDB.count >= 10 && personalNewsDB.count <= 30) {
  console.log("Siz klassik tomoshabinsiz");
} else if (personalNewsDB.count > 30) {
  console.log("Siz yangilklar ishqibozisiz");
} else{
  console.log("Xato yuz berdi");
}

console.log(personalNewsDB);

