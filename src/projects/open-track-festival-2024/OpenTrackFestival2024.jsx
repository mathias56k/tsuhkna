import NavbarDark from "../../NavbarDark";
import { Link } from "react-router-dom";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

function OpenTrackFestival2024() {
  const [index, setIndex] = useState(-1);

  const images = [
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC01999.jpg",
      alt: "Image 1",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02012.jpg",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02015.jpg",
      alt: "Image 3",
      className: "max-w-[350px] xl:max-w-[710px] xl:h-[525px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02028.jpg",
      alt: "Image 4",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02032.jpg",
      alt: "Image 5",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02064.jpg",
      alt: "Image 6",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02087.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02324.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02159.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02184.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02191.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02254.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02267.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02302.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02324.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02329.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02334.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02345.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02350.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02361.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02363.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02368.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02371.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02372.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02377.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02379.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02385.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02391.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02397.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02402.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02404.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02408.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02429.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC01924.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC01929.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC01930.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC01937.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC01943.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC01948.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC01955.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC01961.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC01970.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC01983.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC01984.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02005.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02032.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02064.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02078.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/opentrackfestival2024/DSC02181.jpg",
      alt: "Image 7",
      className: "max-w-[350px]"
    }
  ];

  const handleClick = (index) => setIndex(index);

  return (
    <div>
      <NavbarDark />
      <div className="min-h-screen bg-[#141414]">
        <div className="text-sm breadcrumbs pt-[65px] text-[#CFC0AE] font-SmolBoy pl-2">
          <ul>
            <li>
              <Link to="/" onClick={scrollToTop}>Home</Link>
            </li>
            <li>
              <Link to="/projects" onClick={scrollToTop}>Projects</Link>
            </li>
            <li>
              <p className="cursor-default">Open Track Festival 2024</p>
            </li>
          </ul>
        </div>
        <div className="text-[#CFC0AE] flex flex-col items-center justify-center mt-8">
          <h2 className="font-BigBoy font-black text-3xl lg:text-5xl xl:text-6xl tracking-wide text-center">Open Track Festival 2024</h2>
          <div className="w-[95%] my-8 flex items-center justify-center flex-wrap gap-[10px]">
            {images.map((image, i) => (
              <img
                key={i}
                src={image.src}
                alt={image.alt}
                className={image.className + " cursor-pointer"}
                onClick={() => handleClick(i)}
              />
            ))}
          </div>
        </div>
      </div>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map(image => ({ src: image.src, alt: image.alt }))}
        plugins={[Zoom, Counter]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
      />
    </div>
  );
}

export default OpenTrackFestival2024;
