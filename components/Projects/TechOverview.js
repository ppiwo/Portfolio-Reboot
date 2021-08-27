
import ListSkills from '@/components/Skills/ListSkills';
import styled from 'styled-components';

const TechWrapper = styled.div`
    display: flex;
    margin-bottom: 18px;
`;

export default function TechOverview({techStack, textContent}) {
    return (
        <>
        <TechWrapper>
            <ListSkills allSkills={techStack} />
        </TechWrapper>
        <h3>The Thought Process</h3>
        <p>{textContent}</p>
        </>
    )
}
