import { webdeveloper, bullzpothero, apdeveloper} from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="portfolio" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bullzpothero} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Modern & Unique  <br className="sm:block hidden" /> Solutions from Us!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Innovative web & app development services and e-commerce solutions to enhance your online presence.
      Have a look at our recent projects!
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={webdeveloper} alt="web_developer" className="w-[82.05px] h-[42.05px] object-contain mr-5 cursor-pointer hover:bg-white rounded-[10px]" />
        <img src={apdeveloper} alt="app_developer" className="w-[82.05px] h-[43.08px] object-contain cursor-pointer hover:bg-white rounded-[10px]" />
      </div>
    </div>
  </section>
);

export default Billing;