

const Hero = () => {
    return (
        <div>
            <div className='absolute text-[#D2D0C3] flex flex-col justify-start items-center  w-screen h-screen mt-5 md:mt-20 font-anton   xl:mt-10'>
                <div className='flex items-end gap-6 z-1'>
                    <p className='text-5xl sm:text-8xl md:text-[160px] 2xl:text-[250px] font-black leading-none inline-block '>KHONDOKAR</p>
                    <p className='pb-1 text-xs sm:text-xl'>
                        Turning ideas into impact.
                    </p>

                </div>
                <div className='flex items-end gap-6 z-1'>
                    <p className='text-end  pb-1 text-xs sm:text-xl'>
                        Digital artist <br />
                        brand strategist
                    </p>
                    <p className='text-5xl sm:text-8xl md:text-[160px] 2xl:text-[250px] font-black leading-none inline-block '>FARDIN ISLAM</p>
                    

                </div>
            </div>
            <div className='flex'>
                <div className='flex-1  bg-white'>
                    <img src={"/hero.png"} className='md:h-screen md:w-screen object-cover mt-20 xl:pt-70 blur-xs md:blur-md' />

                </div>
                <div className='flex-1  '>
                    <img src={"/blackBg.jpg"} className='md:h-screen md:w-screen object-cover xl:pt-70 blur-lg md:blur-md' />

                </div>
            </div>
        </div>
    );
};

export default Hero;