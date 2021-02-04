import React from 'react';
import Svg from '../../assets/images/onProduction.svg';
import {
  Container,
  BlogWrapper,
  Icon,
  BlogContent,
  BlogH1,
  ImgWrap,
  Img } from './BlogElements';

const Blog = () => {
  return (
    <Container>
      <BlogWrapper>
        <Icon to="/">faber</Icon>
        <BlogContent>
          <BlogH1>Still Under Production</BlogH1>
          <ImgWrap>
            <Img src={Svg} alt="working-in-prgress" />
          </ImgWrap>
        </BlogContent>
      </BlogWrapper>
    </Container>
  )
}

export default Blog;