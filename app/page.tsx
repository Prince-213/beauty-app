import FixedAdvertTop from "@/components/custom/FixedAdvertTop";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Facebook,
  Instagram,
  Search,
  ShoppingBagIcon,
  Twitter,
} from "lucide-react";
import world from "@/lib/icons/icons8-world-100.png";
import skin from "@/lib/icons/icons8-skin-64.png";
import face from "@/lib/icons/icons8-smile-100.png";
import ItemCard from "@/components/custom/itemcard";
import FaButton from "@/components/custom/fabutton";
import Header from "@/components/custom/header";

export default function Home() {
  return (
    <div className=" relative font-poppins w-full min-h-screen4">
      <div className=" w-full h-[85vh] grid grid-cols-2 ">
        <div className=" bg-foralwhite relative flex items-center justify-center">
          <Image
            src={
              "https://assets.website-files.com/63d0c06097974d7738bb5468/63d216d14249864a29be3db1_shape-1.svg"
            }
            width={200}
            height={200}
            alt=""
            className=" absolute bottom-0 left-0"
          />
          <div className=" space-y-8 w-full max-w-[70%] ml-[0%] h-full flex flex-col justify-center ">
            <h1 className="   text-[74px]  leading-snug font-normal text-darkslategreen font-melodrama text-center">
              Look within yourself and discover
            </h1>
            <p className=" text-lg text-center max-w-[70%] mx-auto">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when.
            </p>
            <FaButton style=" w-[50rem]">
              <p>View Collection</p>
            </FaButton>
          </div>
        </div>
        <div className=" relative w-full h-full overflow-hidden rounded-tr-full rounded-br-full">
          <Image
            src={
              "https://source.unsplash.com/person-holding-amber-glass-bottle-0MoF-Fe0w0A"
            }
            fill
            alt=""
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
      <div className=" w-full py-[90px] ">
        <div className=" w-[70%] mx-auto space-y-16">
          <h1 className=" text-center text-pretty font-melodrama text-[50px] font-normal leading-snug">
            Our natural skincare products arecrafted with cutting-edge green
            science and innovative ingredients to provide the ultimate luxury
            skincare experience
          </h1>
          <div className=" w-[70%] mx-auto grid grid-cols-3">
            <div className=" flex items-start space-x-5">
              <Image
                src={world}
                width={50}
                height={50}
                alt=""
                className=" rounded-full"
              />
              <p className=" text-lg">Long-lasting and sustainable.</p>
            </div>
            <div className=" flex items-start space-x-5">
              <Image
                src={skin}
                width={50}
                height={50}
                alt=""
                className=" rounded-full"
              />
              <p className=" text-lg">Lovingly crafted for all bodies.</p>
            </div>
            <div className=" flex items-start space-x-5">
              <Image
                src={face}
                width={50}
                height={50}
                alt=""
                className=" rounded-full"
              />
              <p className=" text-lg">Unbeatably comfortable.</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[90%] mx-auto h-[70vh] grid grid-cols-2 pb-[90px]">
        <div className=" relative w-full h-full overflow-hidden rounded-tl-full rounded-bl-full">
          <Image
            src={"https://source.unsplash.com/votive-candle-r40EYKVyutI"}
            fill
            alt=""
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              objectPosition: "center",
            }}
          />
        </div>
        <div className=" flex justify-center items-center">
          <div className=" w-[80%] mx-auto space-y-10 flex flex-col items-center justify-center">
            <h1 className=" text-[50px] font-normal text-center font-melodrama">
              Fab Vitamin C Body Cream For Skin Whitening
            </h1>
            <p className=" text-lg text-center max-w-[75%] mx-auto">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters.
            </p>
            <FaButton style=" w-[5rem]">
              <p>Shop Now</p>
            </FaButton>
          </div>
        </div>
      </div>
      <div className=" w-[80%] mx-auto space-y-8 pb-[90px]">
        <h1 className=" text-[64px] text-center font-melodrama">
          Our Featured Products
        </h1>
        <div className=" w-full mx-auto grid grid-cols-4">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
      <div className=" w-full pb-[90px]">
        <div className=" w-[80%] flex justify-between items-center mx-auto bg-foralwhite relative p-[70px]">
          <Image
            src={
              "https://assets.website-files.com/63d0c06097974d7738bb5468/63f83ba903ce1c1d09aa81b8_shape-3.svg"
            }
            alt=""
            width={200}
            height={200}
            className=" absolute top-0 left-0"
          />
          <Image
            src={
              "https://assets.website-files.com/63d0c06097974d7738bb5468/63f83bff98df8623ec29e553_shape-4.svg"
            }
            alt=""
            width={150}
            height={150}
            className=" absolute bottom-0 right-0"
          />
          <div className=" w-[50%] space-y-2">
            <h1 className=" text-[50px] font-normal font-melodrama">
              Our Story
            </h1>
            <p className=" text-lg">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself.
            </p>
            <br />
            <br />
            <a href="#" className=" underline text-xl mt-5">
              Read More
            </a>
          </div>
          <div className=" relative w-[30%] rounded-tr-full rounded-tl-full rounded-br-full rounded-bl-full h-[65vh] overflow-hidden -translate-x-[4rem] ">
            <Image
              src={
                "https://images.unsplash.com/photo-1501644898242-cfea317d7faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNjI0Mjk3Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
              }
              fill
              alt=""
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" w-full py-[140px] bg-foralwhite">
        <div className=" w-[60%] h-[40vh] mx-auto flex items-center justify-between">
          <div className=" relative w-[42%] h-full">
            <Image
              className=" absolute transition-all delay-100 duration-200 ease-in-out "
              src={"https://source.unsplash.com/votive-candle-r40EYKVyutI"}
              fill
              alt=""
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                objectPosition: "center",
              }}
            />
          </div>
          <div className=" w-[1px] h-[50vh] opacity-5 bg-black"></div>
          <div className=" w-[40%] ">
            <h1 className=" text-3xl font-melodrama text-center text-black">
              The Style Symphony
            </h1>
            <br />
            <p className=" text-sm text-black text-center font-medium">
              Join our community for exclusive offers and updates
            </p>
            <br />
            <br />
            <div className=" w-full border-b flex justify-between items-center py-3 border-b-black">
              <input
                type="text"
                placeholder="Email"
                className=" text-foralwhite outline-none bg-transparent border-none"
              />
              <ArrowRight className=" text-black" />
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-[160px] w-[80%] pb-[90px] flex justify-between items-center mx-auto">
        <div className=" w-[10%]">
          <h1 className=" font-melodrama text-[42px]">Shop by categories</h1>
        </div>
        <div className=" w-[80%] gap-x-16 grid grid-cols-3">
          <div className=" flex flex-col group items-center space-y-5">
            <div className=" h-[40vh] w-full overflow-hidden relative rounded-br-full rounded-bl-full ">
              <Image
                className="  transition-all delay-100 duration-200 group-hover:scale-110  ease-in-out "
                src={"https://source.unsplash.com/votive-candle-r40EYKVyutI"}
                fill
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  objectPosition: "center",
                }}
              />
            </div>
            <h1 className=" uppercase text-center text-lg font-medium">
              body wash
            </h1>
          </div>
          <div className=" flex flex-col group items-center space-y-5">
            <div className=" h-[40vh] w-full overflow-hidden relative rounded-br-full rounded-bl-full ">
              <Image
                className="  transition-all delay-100 duration-200 group-hover:scale-110  ease-in-out "
                src={"https://source.unsplash.com/votive-candle-r40EYKVyutI"}
                fill
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  objectPosition: "center",
                }}
              />
            </div>
            <h1 className=" uppercase text-center text-lg font-medium">
              face wash
            </h1>
          </div>

          <div className=" flex flex-col group items-center space-y-5">
            <div className=" h-[40vh] w-full overflow-hidden relative rounded-br-full rounded-bl-full ">
              <Image
                className="  transition-all delay-100 duration-200 group-hover:scale-110  ease-in-out "
                src={"https://source.unsplash.com/votive-candle-r40EYKVyutI"}
                fill
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  objectPosition: "center",
                }}
              />
            </div>
            <h1 className=" uppercase text-center text-lg font-medium">
              cleanser
            </h1>
          </div>
        </div>
      </div>
      <div className=" bg-foralwhite py-[120px] relative w-full">
        <Image
          src={
            "https://assets.website-files.com/63d0c06097974d7738bb5468/63f83ba903ce1c1d09aa81b8_shape-3.svg"
          }
          alt=""
          width={200}
          height={200}
          className=" absolute top-0 left-0"
        />
        <div className=" w-[80%] space-y-12 mx-auto">
          <h1 className=" font-melodrama text-[36px]">
            “I absolutely love the products I purchased from this boutique! The
            quality is exceptional, and my skin has never looked better. The
            packaging is also beautiful, making it a luxurious experience every
            time I use them. Highly recommend!”
          </h1>
          <div className=" flex items-center space-x-4">
            <div className=" relative overflow-hidden w-20 h-20 rounded-full">
              <Image
                className=" absolute transition-all delay-100 duration-200 ease-in-out "
                src={"https://source.unsplash.com/votive-candle-r40EYKVyutI"}
                fill
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  objectPosition: "center",
                }}
              />
            </div>
            <div>
              <h1 className=" font-medium text-lg">Cody Fisher</h1>
              <p>New York, USA</p>
            </div>
          </div>
          <div className=" w-full space-x-4 flex items-center justify-end">
            <button className=" border-black p-2 border rounded-full ">
              <ArrowLeft />
            </button>
            <button className=" border-black p-2 border rounded-full ">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className=" gap-x-[1px] w-full pt-[180px] grid grid-cols-5">
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <div key={item} className=" group relative h-[50vh]">
              <Image
                className=" absolute transition-all delay-100 duration-200 ease-in-out "
                src={"https://source.unsplash.com/votive-candle-r40EYKVyutI"}
                fill
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  objectPosition: "center",
                }}
              />
              <div className=" transition-all duration-200 ease-in delay-150 opacity-0 group-hover:opacity-100 absolute left-[50%] flex items-center justify-center top-[50%] bg-white w-20 h-20 rounded-full z-[999999]">
                <Instagram size={32} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
