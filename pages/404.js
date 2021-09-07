// 404.js
import Image from 'next/image'
import PageLink from '@/components/Projects/PageLink';
import styled from 'styled-components'
import Head from 'next/head';

const PageWrap = styled.div`
text-align: center; position: absolute; width: 100vw; top: 50%; left: 50%; transform: translate(-50%, -50%);
`;

const ImgWrapper = styled.div`
position: relative; width: 100%; height: 17vw; min-height: 156px; margin-bottom: 20px;
`;

const H1 = styled.h1`
    margin-bottom: 25px;
`;

const P = styled.p`
margin-bottom: 20px;
`;

export default function FourOhFour() {
  return <>
  <Head>
        <title>Pat Piwo - Oops!</title>
      </Head>
    <PageWrap>
    <H1>Oops!</H1>
    <P>Sorry, the page you were trying to find isn't avaliable.</P>
    <ImgWrapper>
        <Image src="https://res.cloudinary.com/dqfuzl8u2/image/upload/v1630822123/undraw_server_down_s4lk_1_n0e2nx.svg" alt="" layout="fill"></Image>
    </ImgWrapper>
    <PageLink href="/" center>Return to home page</PageLink>
    </PageWrap>
  </>
}