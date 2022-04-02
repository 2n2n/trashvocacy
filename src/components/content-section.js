import React from 'react'
import { Content } from '../styled/base'
class ContentSection extends React.Component {
    render() {
        return (
            <Content>
                { this.props.children }
            </Content>
        )
    }
}

export default ContentSection