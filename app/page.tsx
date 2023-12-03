import Landing from "@/components/misc/Landing";
import Header from "@/components/misc/Header";
import HomeSlide from "@/components/misc/HomeSlide";
import Link from "next/link";
import Footer from "@/components/misc/Footer";

export default function Home() {
  return (
    <main className="flex flex-col bg-transparent">
      <section className="h-screen w-full">
        <section className="h-[12vh] w-full">
          <Header />
        </section>
        <Landing />
      </section>

      <section className=" h-screen w-full snap-y snap-mandatory snap-start model3">
        <HomeSlide
          Model="Model 3"
          Description={
            <>Starting at $32,740 {<br />} After Federal Tax Credit</>
          }
          LeftButtonText="Explore Inventory"
          RightButtonText="Custom Order"
          LeftButtonRoute="/booking"
          RightButtonRoute="/booking"
          ImageSource=""
        />
      </section>

      <section className="h-screen w-full modelY">
        <HomeSlide
          Model="Model Y"
          Description={
            <>Starting at $40,240 {<br />} After Federal Tax Credit</>
          }
          LeftButtonText="Explore Inventory"
          RightButtonText="Custom Order"
          LeftButtonRoute="/booking"
          RightButtonRoute="/booking"
          ImageSource=""
        />
      </section>

      <section className="h-screen w-full modelS">
        <HomeSlide
          Model="Model S"
          Description={<Link href="/explore">Explore Inventory</Link>}
          LeftButtonText="Custom Order"
          RightButtonText="Demo Drive"
          LeftButtonRoute="/booking"
          RightButtonRoute="/booking"
          ImageSource=""
        />
      </section>
      <section className="h-screen w-full modelX">
        <HomeSlide
          Model="Model X"
          Description={<Link href="/explore">Explore Inventory</Link>}
          LeftButtonText="Custom Order"
          RightButtonText="Demo Drive"
          LeftButtonRoute="/booking"
          RightButtonRoute="/booking"
          ImageSource=""
        />
      </section>

      <section className="h-screen w-full panels">
        <HomeSlide
          Model="Solar Panels"
          Description={
            <Link className=" underline" href="/energy">
              {" "}
              Schedule a Virutal Consultation
            </Link>
          }
          LeftButtonText="Order Now"
          RightButtonText="Learn More"
          LeftButtonRoute="/energy"
          RightButtonRoute="/energy"
          ImageSource=""
        />
      </section>

      <section className="h-screen w-full roof">
        <HomeSlide
          Model="Solar Roof"
          Description="Produce Clean Energy From Your Roof"
          LeftButtonText="Order Now"
          RightButtonText="Learn More"
          LeftButtonRoute="/energy"
          RightButtonRoute="/energy"
          ImageSource=""
        />
      </section>

      <section className="h-screen w-full wall">
        <HomeSlide
          Model="Powerwall"
          Description=""
          LeftButtonText="Order Now"
          RightButtonText="Learn More"
          LeftButtonRoute="/energy"
          RightButtonRoute="/energy"
          ImageSource=""
        />
      </section>

      <section className="h-screen w-full acc flex flex-col">
        <HomeSlide
          Model="Accessories"
          Description=""
          LeftButtonText="Shop Now"
          RightButtonText="About Tesla &copy;"
          LeftButtonRoute="/energy"
          RightButtonRoute="/energy"
          ImageSource=""
        />
      </section>
    </main>
  );
}
