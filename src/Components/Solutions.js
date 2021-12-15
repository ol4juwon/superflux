import React from 'react';
import styled from 'styled-components';
import Solutionsitem from './SolutionsItem';

const Solutions = (props) => {
    console.log(props.solutions);
    return (
        <Solutions.Wrapper>
            {props.solutions && props.solutions.map(
                (details, index) => {
                    return(
                        <Solutionsitem key={index} details={details} />
                    )
                }
            )

            }
        </Solutions.Wrapper>
    );
}

Solutions.Wrapper = styled.div`
width: 100%;
`

export default Solutions;
