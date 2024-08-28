import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h3>Who We Are</h3>
          <p>
            At SuperMom, we are dedicated to empowering expectant mothers by
            providing comprehensive healthcare and wellness solutions tailored
            to their unique needs. Our platform is designed to connect pregnant
            women with top healthcare providers, including obstetricians,
            gynecologists, and specialists, ensuring timely and personalized
            care. With our user-friendly doctor booking feature, you can easily
            schedule appointments with trusted professionals based on your
            location and availability, ensuring that you receive the best care
            throughout your pregnancy journey.
          </p>
          <p>
            In addition to healthcare services, SuperMom offers a curated
            selection of essential products and services to support you during
            this special time. From maternity clothes and prenatal vitamins to
            nursery equipment and specialized services like prenatal yoga
            classes and massage therapy, we strive to be your one-stop shop for
            all things pregnancy-related. Our intuitive interface makes it easy
            for moms of all technical abilities to navigate, browse, and order
            everything they need to create a comfortable and nurturing
            environment for themselves and their growing families.
          </p>
          <p>"Embracing the strength within, nurturing life with grace and resilience."</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
