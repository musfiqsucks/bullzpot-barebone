import { ecommerce } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Discover Our Portfolio in  <br className="sm:block hidden" /> in Web/App Development.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Step into our digital world where we transform innovative ideas into stunning, 
      user-centric web and mobile applications that elevate businesses and enhance user experiences.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={ecommerce} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;