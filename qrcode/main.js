function generateQRCode() {
  const input = document.getElementById("qrInput").value;
  const qrBox = document.getElementById("qrcode");

  if (!input.trim()) {
    alert("Please enter some text.");
    return;
  }

  qrBox.innerHTML = ""; // Clear old QR

  QRCode.toDataURL(input, { width: 200 }, function (err, url) {
    if (err) {
      alert("Error generating QR code.");
      console.error(err);
      return;
    }

    const img = document.createElement("img");
    img.src = url;
    img.alt = "Generated QR Code";
    img.style.width = "200px";
    qrBox.appendChild(img);
  });
}
