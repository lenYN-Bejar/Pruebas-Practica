import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components ";
import "./App.css";

const CarouserImg = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

const CarouselButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 15px;
`;

const CarouselButton = styled.button`
  color: white;
  background-color: #eb118a;
  padding: 8px;
  margin: 0 5px;
`;

function App() {
  const images = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mordeo.org%2Ffiles%2Fuploads%2F2020%2F02%2FGorgeous-Megan-Fox-In-Red-Dress-4K-Ultra-HD-Mobile-Wallpaper.jpg&f=1&nofb=1&ipt=834adff93a32fdba24ec6d4549c60ab2227bb3e946635e51f284371bcead4592&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.gotceleb.com%2Fwp-content%2Fuploads%2Fcelebrities%2Fmegan-fox%2F2010-teen-choice-awards-in-universal-city%2Fmegan-fox-2010-teen-choice-awards-in-universal-city-04.jpg&f=1&nofb=1&ipt=b05b654452da674ced49723604abbd8b4e64fd457ad512e642f2aeed36fa715c&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fd9%2F1a%2Fc8%2Fd91ac8931fe772098fa51c0d65b9482c.jpg&f=1&nofb=1&ipt=4dd16ab885d129b0b4a21757f6f160074a7e439fd43e4ca0c8a47fe64cb22b5c&ipo=images",
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images)
    }, 3000);
    return() => clearInterval(interval)
  })

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };


  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <div>
      <CarouserImg
        src={selectedImage}
        className={loaded ? "loaded" : ""}
        onLoad={() => setLoaded(true)}
      />
      <CarouselButtonContainer>
          <CarouselButton onClick={previous}>{"<"}</CarouselButton>
          <CarouselButton onClick={next}>{">"}</CarouselButton>

      </CarouselButtonContainer>
    </div>
  );
}

export default App;
