

const Hero = () => {
    return (
        <div>
            <div className='absolute text-[#6b6b67] flex flex-col justify-start items-center  w-screen h-screen mt-20 font-anton opacity-95'>
                <div className='flex items-end gap-6 '>
                    <p className='text-6xl sm:text-8xl md:text-[160px] 2xl:text-[250px] font-black leading-none inline-block '>KHONDOKAR</p>
                    <p className='pb-1 text-xs sm:text-xl'>
                        Turning ideas into impact.
                    </p>

                </div>
                <div className='flex items-end gap-6'>
                    <p className='text-end  pb-1 text-xs sm:text-xl'>
                        Digital artist <br />
                        brand strategist
                    </p>
                    <p className='text-6xl sm:text-8xl md:text-[160px] 2xl:text-[250px] font-black leading-none inline-block '>FARDIN ISLAM</p>
                    

                </div>
            </div>
            <div className='flex'>
                <div className='flex-1'>
                    <img src={"/hero.png"} className='md:h-screen md:w-screen object-cover' />

                </div>
                <div className='flex-1'>

                </div>
            </div>
        </div>
    );
};

export default Hero;