import React from 'react';
import styled from 'styled-components';
import Solutionsitem from './SolutionsItem';

const Solutions = (props) => {
    console.log(props.solutions);
    return (
        <Solutions.Wrapper>
            {props.solutions && props.solutions.map(
                (details, index) => {
                    return (
                        <Solutionsitem key={index} details={details} />
                    )
                }
            )

            }
        </Solutions.Wrapper>
    );
}

Solutions.Wrapper = styled.div`
width: 3240px;
  height: 446px;
  clear: both;
  position: relative;
  animation-name: slider;
  animation-duration: 30s;
  animation-delay: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: backwards;
  animation-play-state: running;
  @keyframes slider {
    0% {
      transform: translate(0, 0);
    }
    50% {
        transform: translate(-1080px, 0);
    }
    100% {
        transform: translate(-2160px, 0);
    }
  }
`

export default Solutions;
