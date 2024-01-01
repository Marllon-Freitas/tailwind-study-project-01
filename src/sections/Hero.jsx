import Button from '../components/Button';
import { arrowRight } from '../assets/icons';

const Hero = () => {
  return (
    <section
      id="home"
      className="max-container w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer Collections</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span> Shoes
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          nisi vitae iure recusandae rem aliquam voluptatem in earum ab quaerat?
          Nulla sint quibusdam nobis est iure quidem! Repellendus, velit
          tenetur.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
      </div>
    </section>
  );
};

export default Hero;
