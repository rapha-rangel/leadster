import styled  from "styled-components";

export const Section = styled.section`
`
export const Container = styled.div`
  display: flex;  
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
`
export const Title = styled.div`
   font-size: 0.7rem;

`
export const Icon = styled.div`
 font-size: 0.7rem;
`
export const Content= styled.div`
  display: grid;
  justify-items: center;
  background-color: white;
`
export const ContentDiv= styled.div`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 100%;
  margin-bottom: 2rem;
`
export const ContentImage= styled.img`
  width: 100%;
`
export const ContentDescription= styled.p`
font-size: 0.7rem;
  padding: 1rem;

`