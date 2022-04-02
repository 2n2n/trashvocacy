import React, { Component } from 'react';
import { observable } from 'mobx'
import { observer } from 'mobx-react';

import {
  HeroContainer,
  HeroFooter,
  OneColumn,
  Wrapper,
  Faq
} from './styled/base.js'

import HelpOptions from './components/help-options'
import About from './components/about'
import HeaderSection from './components/header-section'
import ContentSection from './components/content-section'

@observer
class App extends Component {
  @observable countdown = 0;
  @observable options = [
    "contact us now ",
    "make a donation", 
    "become a volunteer"
  ]
  componentDidMount() {

  }
  render() {
    let options = this.options.map((val, k) => (
      <HelpOptions key={k} item={k + 1} label={val} />
    ))
    return (
      <HeroContainer>
        <HeaderSection />
        <ContentSection>
          <Wrapper>
            <About />
            <OneColumn>
              &nbsp;
            </OneColumn>

          </Wrapper>
        </ContentSection>
        <HeroFooter>
          <Faq>
            HOW CAN YOU HELP?
          </Faq>
          {options}
        </HeroFooter>
      </HeroContainer>
    )
  }
}

export default App;
