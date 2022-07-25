import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://researchleap.com/wp-content/uploads/2019/11/image_2019-11-14_13-57-27-e1573726312760.jpg" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];

const ImageSlider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1700}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default ImageSlider