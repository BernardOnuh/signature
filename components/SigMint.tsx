import styles, { layout } from "../styles/style"
import Buttons from "./Buttons";

const SigMint = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Signature Mint <br className="sm:block hidden" /> 
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Signature mint as it name implies you would have to pass some requirement which is to have minted the
          first set of NFT collection above.
        </p>
  
        <Buttons />
      </div>
  
      <div className={layout.sectionImg}>
        <img src='/card.png' alt="idolo" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
  
  export default SigMint;
  