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

function DriftFactoryMatsuri2024() {
  const [index, setIndex] = useState(-1);

  const vertical = "max-w-[356px]";
  const horizontal = "max-w-[356px] xl:max-w-[600px] xl:h-[400px]";


  const images = [
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC06395-Enhanced-NR.jpg",
      alt: "Image 67",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC06399-Enhanced-NR.jpg",
      alt: "Image 68",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05612-Enhanced-NR.jpg",
      alt: "Image 49",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05562-Enhanced-NR.jpg",
      alt: "Image 48",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05615-Enhanced-NR.jpg",
      alt: "Image 50",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC06413-Enhanced-NR.jpg",
      alt: "Image 69",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC06414-Enhanced-NR.jpg",
      alt: "Image 70",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC06420-Enhanced-NR.jpg",
      alt: "Image 71",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04792-Enhanced-NR.jpg",
      alt: "Image 25",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04820-Enhanced-NR.jpg",
      alt: "Image 26",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04361-Enhanced-NR.jpg",
      alt: "Image 2",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04376-Enhanced-NR.jpg",
      alt: "Image 8",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04387-Enhanced-NR.jpg",
      alt: "Image 9",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04391-Enhanced-NR.jpg",
      alt: "Image 10",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04405-Enhanced-NR.jpg",
      alt: "Image 11",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04750-Enhanced-NR.jpg",
      alt: "Image 20",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04763-Enhanced-NR.jpg",
      alt: "Image 21",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05170-Enhanced-NR.jpg",
      alt: "Image 42",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04770-Enhanced-NR.jpg",
      alt: "Image 22",
      className: `max-w-[356px] xl:max-w-[1100px] xl:max-h-[584px]`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04708-Enhanced-NR.jpg",
      alt: "Image 18",
      className: `max-w-[356px] xl:max-w-none xl:max-h-[584px]`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04187-Enhanced-NR.jpg",
      alt: "Image 3",
      className: `max-w-[356px] xl:max-w-none xl:max-h-[584px]`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC06293-Enhanced-NR.jpg",
      alt: "Image 65",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC06366-Enhanced-NR.jpg",
      alt: "Image 66",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05163-Enhanced-NR.jpg",
      alt: "Image 41",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04726-Enhanced-NR.jpg",
      alt: "Image 19",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05688-Enhanced-NR.jpg",
      alt: "Image 51",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05785-Enhanced-NR.jpg",
      alt: "Image 52",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05928-Enhanced-NR.jpg",
      alt: "Image 55",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05909-Enhanced-NR.jpg",
      alt: "Image 54",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04904-Enhanced-NR.jpg",
      alt: "Image 29",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04336-Enhanced-NR.jpg",
      alt: "Image 4",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04909-Enhanced-NR.jpg",
      alt: "Image 30",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC06220-Enhanced-NR.jpg",
      alt: "Image 64",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04347-Enhanced-NR.jpg",
      alt: "Image 5",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04368-Enhanced-NR.jpg",
      alt: "Image 7",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04529-Enhanced-NR.jpg",
      alt: "Image 12",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC03892-Enhanced-NR.jpg",
      alt: "Image 1",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04569-Enhanced-NR.jpg",
      alt: "Image 13",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04573-Enhanced-NR.jpg",
      alt: "Image 14",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04578-Enhanced-NR.jpg",
      alt: "Image 15",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05234-Enhanced-NR.jpg",
      alt: "Image 46",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04789-Enhanced-NR.jpg",
      alt: "Image 23",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04829-Enhanced-NR.jpg",
      alt: "Image 28",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04617-Enhanced-NR.jpg",
      alt: "Image 16",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC04945-Enhanced-NR.jpg",
      alt: "Image 31",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05017-Enhanced-NR.jpg",
      alt: "Image 32",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05025-Enhanced-NR.jpg",
      alt: "Image 33",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05035-Enhanced-NR.jpg",
      alt: "Image 34",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05055-Enhanced-NR.jpg",
      alt: "Image 35",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05118-Enhanced-NR.jpg",
      alt: "Image 36",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05128-Enhanced-NR.jpg",
      alt: "Image 37",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05984-Enhanced-NR.jpg",
      alt: "Image 56",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05811-Enhanced-NR.jpg",
      alt: "Image 53",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05140-Enhanced-NR.jpg",
      alt: "Image 38",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05143-Enhanced-NR.jpg",
      alt: "Image 39",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05144-Enhanced-NR.jpg",
      alt: "Image 40",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05201-Enhanced-NR.jpg",
      alt: "Image 43",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05206-Enhanced-NR.jpg",
      alt: "Image 44",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05214-Enhanced-NR.jpg",
      alt: "Image 45",
      className: `${horizontal}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC05385-Enhanced-NR.jpg",
      alt: "Image 47",
      className: `max-w-[356px] xl:max-w-[1100px] xl:max-h-[635px]`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC06077-Enhanced-NR.jpg",
      alt: "Image 57",
      className: `max-w-[356px] xl:max-w-none xl:max-h-[635px]`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC06085-Enhanced-NR.jpg",
      alt: "Image 58",
      className: `max-w-[356px] xl:max-w-none xl:max-h-[635px]`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC06098-Enhanced-NR.jpg",
      alt: "Image 59",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC06187-Enhanced-NR%20(1).jpg",
      alt: "Image 61",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC06193-Enhanced-NR.jpg",
      alt: "Image 63",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC06473-Enhanced-NR.jpg",
      alt: "Image 72",
      className: `${vertical}`
    },
    {
      src: "https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/driftfactorymatsuri2024/DSC06483-Enhanced-NR.jpg",
      alt: "Image 73",
      className: `${vertical}`
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
              <p className="cursor-default">Drift Factory Matsuri 2024</p>
            </li>
          </ul>
        </div>
        <div className="text-[#CFC0AE] flex flex-col items-center justify-center mt-8">
          <h2 className="font-BigBoy font-black text-3xl lg:text-5xl xl:text-6xl tracking-wide text-center">Drift Factory Matsuri 2024</h2>
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

export default DriftFactoryMatsuri2024;
