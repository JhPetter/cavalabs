import React from 'react'
import { Button } from '../ButtonElements'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  Img, 
  ImgWrap 
} from './InfoElements'

const InfoSection = (
  {lightBg,
  id, 
  imgStart, 
  topLine, 
  lightText, 
  headLine, 
  darkText, 
  description, 
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2}
) => {
  return (
    <>
      <InfoContainer lightbg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgstart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lighttext={lightText}>{headLine}</Heading>
                <Subtitle darktext={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button 
                  to='home'
                  smoot={1}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={ primary ? 1 : 0 }
                  dark={ dark ? 1 : 0 }
                  dark2={ dark2 ? 1 : 0 }
                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
