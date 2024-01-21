import React from "react";


const Services = () => {
  let className =
    "flex flex-col text-center items-center justify-center space-y-3 text-base md:space-y-5";
  let header = "text-xl md:text-2xl font-bold text-white";
  let paragraph = "text-white/90";
  return (
    <section className="bg-[#3C2E3D] w-full flex flex-col md:flex-row gap-2 md:gap-16 justify-center items-center p-4 md:p-12">
      <div className={className}>
    
        <h2 className={header}>Freshly Baked</h2>
        <p className={paragraph}>Lorem ipsum dolor, sit amet consectetur</p>
      </div>
      <div className={className}>
        {/* <HeartPulse size={30} className={icon} /> */}
        <h2 className={header}>Calorie Friendly</h2>
        <p className={paragraph}>Lorem ipsum dolor, sit amet consectetur</p>
      </div>
      <div className={className}>
        {/* <FiCheckCircle className={icon} /> */}
        <h2 className={header}>Highest Quality</h2>
        <p className={paragraph}> Lorem ipsum dolor, sit amet consectetur </p>
      </div>
    </section>
  );
};

export default Services;
