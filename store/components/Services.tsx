import React from "react";

const Services = () => {
  let className =
    "flex flex-col text-center items-center justify-center space-y-3 text-base md:space-y-5";
  let header = "text-xl md:text-2xl font-bold ";
  let paragraph = "";
  return (
    <section className="w-full flex flex-col items-center">
      <h3 className="text-3xl font-light">Why Maison lila?</h3>
      <section className=" rounded-full px-6 py-6 w-full flex flex-col md:flex-row gap-2 md:gap-16 justify-center items-center p-4 md:p-12">
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
    </section>
  );
};

export default Services;
