import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = "5LTmPLUYaxebPs2Yc";

const initEmailjs = () => {
  emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY,
  });
};

export { initEmailjs };
