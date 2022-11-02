import styled from "styled-components";

const StyledBackground = styled.div`
    width:100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #222;

`;

interface Props {
    children: JSX.Element
}

export default function Background(prop: Props){
    return (
        <StyledBackground>
            {prop.children}
        </StyledBackground>
    )
}