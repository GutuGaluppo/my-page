import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterLogo,
  FooterDescription,
  FooterTitle,
  FooterLink,
  Copyright,
} from './styled';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent maxWidth="lg">
        <FooterSection>
          <FooterLogo>RAWBLOX</FooterLogo>
          <FooterDescription>
            Hi, I'm Dominic Wagner – a UI/UX and brand designer passionate about creating seamless digital experiences that connect and convert.
          </FooterDescription>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Menu</FooterTitle>
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#services">Services</FooterLink>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#team">Team</FooterLink>
          <FooterLink href="#pricing">Pricing</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Navigation</FooterTitle>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#tutorial">Tutorial</FooterLink>
          <FooterLink href="#documentation">Documentation</FooterLink>
          <FooterLink href="#partner">Become a Partner</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Social</FooterTitle>
          <FooterLink href="#linkedin">LinkedIn</FooterLink>
          <FooterLink href="#instagram">Instagram</FooterLink>
          <FooterLink href="#twitter">Twitter</FooterLink>
          <FooterLink href="#facebook">Facebook</FooterLink>
          <FooterLink href="#tiktok">Tiktok</FooterLink>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © 2025 Copyright
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

