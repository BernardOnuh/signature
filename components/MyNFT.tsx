import { features } from '../constants'
import styles,{ layout } from '../styles/style'
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index, href }:any) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <a href={href}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
    </a>
  </div>
);

const MyNFT = () =>  (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Mint My idolo PFP  <br className="sm:block hidden" /> 
          as an NFT.
        </h2>
        <div className='border-cyan-400 rounded-md'>
        <img src='/040.jpg' alt="idolo" className="w-[60%] h-[60%] rounded-md sm:w-[80%] sm:h-[80%]" />
        </div>
        <Button />
      </div>
  
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
  
  export default MyNFT;