import React from "react";

const Button = ({ styles }) => (
  <a href= "mailto:contact@bullzpot.com?subject=Inquiry from Bullzpot!">
 <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} button`}>
   Email Me
  </button>
  </a>
);

export default Button;