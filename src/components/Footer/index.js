import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { 
    FooterContainer, 
    FooterLink, 
    FooterLinkTitle, 
    FooterLinksContainer, 
    FooterLinksItems, 
    FooterLinksWrapper, 
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {

  const toogleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinkTitle>About Us </FooterLinkTitle>
                    <FooterLink to='/signin'>How it works</FooterLink>
                    <FooterLink to='/signin'>Testimonials</FooterLink>
                    <FooterLink to='/signin'>Careers</FooterLink>
                    <FooterLink to='/signin'>Investors</FooterLink>
                    <FooterLink to='/signin'>Tearms of service</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Contact Us </FooterLinkTitle>
                    <FooterLink to='/signin'>Contact</FooterLink>
                    <FooterLink to='/signin'>Support</FooterLink>
                    <FooterLink to='/signin'>Destinations</FooterLink>
                    <FooterLink to='/signin'>Sponsorships</FooterLink>
                </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinkTitle>Video</FooterLinkTitle>
                    <FooterLink to='/signin'>Submit Video</FooterLink>
                    <FooterLink to='/signin'>Ambassadors</FooterLink>
                    <FooterLink to='/signin'>Agency</FooterLink>
                    <FooterLink to='/signin'>Influencer</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to='/signin'>Instagram</FooterLink>
                    <FooterLink to='/signin'>Facebook</FooterLink>
                    <FooterLink to='/signin'>Youtube</FooterLink>
                    <FooterLink to='/signin'>Twitter</FooterLink>
                    <FooterLink to='/signin'>Linkeding</FooterLink>
                </FooterLinksItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo 
              to='/'
              onClick={toogleHome}
            >
              CavaLabs
            </SocialLogo>
            <WebsiteRights>
              CavaLabs © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink to='/' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
              <SocialIconLink to='/' target='_blank' aria-label='Instagram'><FaInstagram/></SocialIconLink>
              <SocialIconLink to='/' target='_blank' aria-label='Youtube'><FaYoutube/></SocialIconLink>
              <SocialIconLink to='/' target='_blank' aria-label='Linkedin'><FaLinkedin/></SocialIconLink>
              <SocialIconLink to='/' target='_blank' aria-label='Twitter'><FaTwitter/></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
