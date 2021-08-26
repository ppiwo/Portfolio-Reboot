import Image from 'next/image';
import styled from 'styled-components';


export default function PageHeader({headerText, source, demo, description, image }) {

    const Header = styled.header`
        text-align: center;
    `;

    const A = styled.a`
    `;

    const Description = styled.p`
    text-align: left;
    `;

    const ImageContainer = styled.div`
    aspect-ratio: 2/1;
    width: 100%;
    position: relative;
    `;

    return (
        <Header>
            <h1>{headerText}</h1>
            <A href={source} title="Source Code" target="_blank" rel="noopener noreferrer">Source Code</A>
            <A href={demo} title="Live Demo" target="_blank" rel="noopener noreferrer">Demo</A>
            <Description>{description}</Description>
            <ImageContainer>
                <Image src={image.url} alt={image.alternativeText} layout='fill' />
            </ImageContainer>
        </Header>
    )
}
