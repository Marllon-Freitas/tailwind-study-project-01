import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { statistics } from '../constants';

const Hero = () => {
  return (
    <section
      id="home"
      className="max-container w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-coral-red font-montserrat text-xl">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="mt-6 text-slate-gray text-lg leading-8 mb-14 font-montserrat font-medium max-sm:text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          nisi vitae iure recusandae rem aliquam voluptatem in earum ab quaerat?
          Nulla sint quibusdam nobis est iure quidem! Repellendus, velit
          tenetur.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item) => (
            <div key={item.id} data-aos="fade-up" data-aos-delay="600">
              <p className="text-4xl font-bold font-palanquin">{item.value}</p>
              <p className="text-xl text-slate-gray leading-7 font-montserrat">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
