const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector(".qr-code img");

function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;

  qrCodeBtn.textContent = "Gerando código....";

 
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrCodeInputValue)}`;

  

  qrCodeImg.addEventListener('load', () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código criado!";
  });

}

qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});
