function hisoblash(joriyYil, joriyOy, joriyKun) {
  var joriySana = new Date(joriyYil, joriyOy - 1, joriyKun); // Oyni 0 dan boshlanadi, shuning uchun 1 ni ayirib yozdik
  var milsaniyalar = joriySana.getTime() - new Date(1970, 0, 1).getTime();
  var kunlar = milsaniyalar / (1000 * 60 * 60 * 24);
  return kunlar;
}

var joriyYil = +prompt('joriy yilni kiriting');
var joriyOy = +prompt('joriy oyni kiriting');
var joriyKun = +prompt('joriy kunni kiriting');

var kunlar = hisoblash(joriyYil, joriyOy, joriyKun);
console.log("1970 yilidan buyon " + kunlar + " kun o'tgan.");