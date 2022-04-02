import React from 'react'
import {
    Header,
    Logo,
    Navi,
    Wrapper
} from '../styled/base.js'

class HeaderSection extends React.Component {
    render() {
        return (
            <Header>
                <Wrapper>
                    <Logo>AGRICYCLE</Logo>
                    <Navi>
                        <a href="#">Events</a>
                        <a className="donate" href="#">Donate</a>
                    </Navi>
                </Wrapper>
            </Header>
        )
    }
}
        
export default HeaderSection