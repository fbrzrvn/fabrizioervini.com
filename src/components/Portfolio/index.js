import React from 'react';
import BtnLink from '../BtnLink';
import Svg1 from '../../assets/images/react.svg';
import Svg2 from '../../assets/images/mobile.svg';
import Svg3 from '../../assets/images/plant.svg';
import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioImg,
  PortfolioH2,
  PortfolioP,
  BtnWrap } from './PortfolioElements';

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>My Portfolio</PortfolioH1>
      <PortfolioWrapper>
        <PortfolioCard>
          <PortfolioImg src={Svg1} alt="work1" />
          <PortfolioH2>Work 1</PortfolioH2>
          <PortfolioP>Work Description</PortfolioP>
          <BtnWrap>
            <BtnLink to="/web1"
              primary="true"
              dark="true"
            >View Website</BtnLink>
          </BtnWrap>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioImg src={Svg2} alt="work2" />
          <PortfolioH2>Work 2</PortfolioH2>
          <PortfolioP>Work Description</PortfolioP>
          <BtnWrap>
            <BtnLink to="/web2"
              primary="true"
              dark="true"
            >View Website</BtnLink>
          </BtnWrap>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioImg src={Svg3} alt="work3" />
          <PortfolioH2>Work 3</PortfolioH2>
          <PortfolioP>Work Description</PortfolioP>
          <BtnWrap>
            <BtnLink to="/web3"
              primary="true"
              dark="true"
            >View Website</BtnLink>
          </BtnWrap>
        </PortfolioCard>
      </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio;