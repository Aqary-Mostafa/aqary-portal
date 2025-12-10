import Image from 'next/image';
import { ImageSideContainer } from './styled';

const ImageSide = () => {
  return (
    <ImageSideContainer>
      <Image src='/login-image.png' alt='aqary login' fill />
    </ImageSideContainer>
  );
};

export default ImageSide;
