import Image from 'next/image';
import imageProfile from '../../../../public/assets/imageprofile.jpeg'
import { AboutMeStyled } from './style';

export const AboutMe = () => {
  return (
    <>
      <AboutMeStyled id='aboutme'>

        <div className='image_profile'>
            <Image className='image' 
                src={imageProfile}
                alt='image profile'
                width={360}
                height={435}
            />
        </div>

        <div className='description_profile'>
          <h1 className='paragh_intro'>
            Olá, meu nome é <span className='name'>Joabe Santos</span>, sou
            desenvolvedor <span className='profession'>Front-End</span><span className="point">.</span>
          </h1>
          <p className='training'>
            Desenvolvedor <span className='profession_training'>Full-Stak</span> em formação<span className="point two">.</span>
          </p>
        </div>

      </AboutMeStyled>
    </>
  );
};
