import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a href= "mailto:musfiqr002@gmail.com?subject=Inquiry from Bullzpot">
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer buttonGet`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] hover:bg-cyan-600 object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] hover:bg-orange leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
  </a>
);

export default GetStarted;