import React from 'react';
import styled from 'styled-components';
const Accreditation = () => {
    return (
        <Accreditation.Wrapper>
             <div className='accred-text'>
                            <h3>Accreditation/Certification</h3>
                            </div>
                    <div className='accred-image'>
                        <img src={""} alt=''/>
                        <img src={""} alt=''/>
                        <img src={""} alt=''/>
                    </div>
        </Accreditation.Wrapper>
    );
}

Accreditation.Wrapper = styled.div`
width: 100%;
height: 100%;


`

export default Accreditation;
