

const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

function generateQR(){
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

    
}