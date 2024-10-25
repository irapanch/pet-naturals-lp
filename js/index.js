let today = new Date();
document.getElementById("dateNow").textContent = formatDate(today);

function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1; // Місяці починаються з 0
  let year = date.getFullYear();

  // Додаємо нулі перед днем і місяцем, якщо потрібно
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;

  return `${day}.${month}.${year}`;
}
