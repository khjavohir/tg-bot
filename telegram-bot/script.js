let form = document.querySelector("#form");

const bot = {
  TOKEN: "5061804567:AAEnI2a8_xs0RAaMRm3GtR4veP5CmZIlScI",
  chatID: "1487304819",
};

form.addEventListener("submit", e => {
  e.preventDefault();

  let messaage = document.querySelector("#some_message");

  fetch(
    `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${messaage.value}`,
    {
      method: "GET",
    }
  ).then(
    succes => {
      alert("Message send!");
    },
    error => {
      alert("Message not send!");
      console.log(error);
    }
  );
});
