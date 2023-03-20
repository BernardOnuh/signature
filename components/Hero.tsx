import styles from "@/styles/style";

const Hero = () => {
    return(
        <section id='home' className={`flex md:flex:row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <img src='/Discount.svg' className="w-[32px] h-[32px]"/>
                    <p className={`${styles.paragraph} ml-2`}>
                    <span className="text-white">From</span> Bernard{" "}
                    <span className="text-white">to all my</span> Idolos
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        THIS IS A <br/><br className="'sm:block hidden"/>{''}
                        <span className="text-gradient">DEMO NFT</span>{''}
                    </h1>
                </div>    
                    <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                        MINTING SITE
                    </h1>
                
            </div>
        </section>
    )
}
export default Hero