// Initialize Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

// OTP Functions
function sendOTP() {
  const phoneNumber = "+91" + document.getElementById("mobile-input").value;
  const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  
  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      alert("OTP sent successfully!");
    }).catch((error) => {
      alert("Error sending OTP: " + error.message);
    });
}

function verifyOTP() {
  const code = document.getElementById("otp-code").value;
  confirmationResult.confirm(code).then((result) => {
    alert("Verified successfully!");
    document.querySelector('[data-step="2"]').classList.add('active');
  }).catch((error) => {
    alert("Invalid OTP");
  });
}
