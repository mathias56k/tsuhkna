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

function Stancest24() {
  const [index, setIndex] = useState(-1);

  const images = [
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00490-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A01.282Z",
      alt: "Image 1",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00447-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00442-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00444-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00776-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00806-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00808-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00602.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00606.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00655.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00539.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00540.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00513.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00518.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00522.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00410-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00415-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00423-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00441-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00583.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00592-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00865-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00464-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00551.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00552.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00556.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00559.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00320-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00371-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00373-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00375-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00378-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00395-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00629-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00468-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00453-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00459-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00917-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00921-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00928-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00930-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00953-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/DSC00444-Enhanced-NR.jpg?t=2024-08-06T20%3A11%3A42.895Z",
      alt: "Image 2",
      className: "max-w-[350px]"
    },
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
              <p className="cursor-default">Stancest24</p>
            </li>
          </ul>
        </div>
        <div className="text-[#CFC0AE] flex flex-col items-center justify-center mt-8">
          <h2 className="font-BigBoy font-black text-3xl lg:text-5xl xl:text-6xl tracking-wide text-center">Stancest24</h2>
          <div className="w-[95%] my-8 flex items-center justify-center flex-wrap gap-[10px]">
            {images.map((image, i) => (
              <img
                key={i}
                src={image.src}
                alt={image.alt}
                className={image.className + " cursor-pointer"}
                onClick={() => handleClick(i)}
                loading="lazy"
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

export default Stancest24;
