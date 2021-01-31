import React from 'react';
import Button from '../Button';
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
            <Button to="#"
              primary="true"
              dark="true"
            >View Website</Button>
          </BtnWrap>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioImg src={Svg2} alt="work2" />
          <PortfolioH2>Work 2</PortfolioH2>
          <PortfolioP>Work Description</PortfolioP>
          <BtnWrap>
            <Button to="#"
              primary="true"
              dark="true"
            >View Website</Button>
          </BtnWrap>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioImg src={Svg3} alt="work3" />
          <PortfolioH2>Work 3</PortfolioH2>
          <PortfolioP>Work Description</PortfolioP>
          <BtnWrap>
            <Button to="#"
              primary="true"
              dark="true"
            >View Website</Button>
          </BtnWrap>
        </PortfolioCard>
      </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio;
