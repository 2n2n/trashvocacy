import React from 'react'

import { 
    OptionWrapper,
    CountWrapper,
    LabelWrapper
} from '../styled/base'

const HelpOptions = ({ item, label}) => (
    <OptionWrapper>
        <CountWrapper>{"0"+item + "/"}</CountWrapper>
        <LabelWrapper>{label}</LabelWrapper>
    </OptionWrapper>
)

export default HelpOptions