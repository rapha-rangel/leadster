import styled from "styled-components";

export const Section = styled.section`
  padding: 0.5rem  0.5rem;
  margin-bottom: 1rem;
`
export const Container = styled.ul`
  display: flex;  
  list-style-type: none;
`
export const Item = styled.li`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  background-color: ${props => props.selected ? 'gray':'none'};
  color: ${props => props.selected ? 'white':'gray'};
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;
  pointer-events: ${props => props.disabled ? "none" : "auto"};
  &:hover{
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
`
