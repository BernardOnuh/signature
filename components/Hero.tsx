import styles from "@/styles/style";
import GetStarted from './GetStarted';
import HeroRight from './idolo'


const Hero = () => {
    return(
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src='/heart.png' alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">From</span> Bernard{" "}
            <span className="text-white">to all my</span> Idolos
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          THIS IS A <br className="sm:block hidden" />{" "}
            <span className="text-gradient">DEMO NFT</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        MINTING SITE
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        On our #100DaysOfSolidity we are to create an NFT minting site comprising of normal mint and signature mint.
        I dedicate this to all my idolos which i look up to everyday.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-0 relative`}>
        <HeroRight/>

        {/* gradient start */}
        <div className="absolute z-[1] w-[40%] h-[35%] top-0 white__gradient" />
        <div className="absolute z-[0] w-[80%] h-[80%] rounded-full blue__gradient bottom-40" />
        <div className="absolute z-[1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
    );
};
export default Hero