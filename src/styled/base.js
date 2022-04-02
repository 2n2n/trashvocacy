import styled  from 'styled-components'
import bg from '../assets/images/background.jpg'

export const base = {
    padding: "15px 0px",
    color: {
        yellow: "#FBD556",
        black: "#1D2F38"
    },
    font: {
        koho: 'KoHo, sans-serif',
        roboto: 'Roboto, sans-serif'
    }
}
export const FullScreenContainer = styled.div`  
    display: flex;
    font-size: 1.2em;
    font-family: ${base.font.roboto};
    height: 100vh;
    width: 100vw;
    flex-direction: column; 
`

export const HeroContainer = styled(FullScreenContainer)`
   background-color: ${base.color.yellow}
`

export const OneColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 40px;
`
export const Wrapper = styled.div`
    margin: 0 auto;
    width: 960px;
    display: flex;
    flex-direction: row;
`
export const Header = styled.div`
    font-weight: bold;
    align-items: center;
    padding: ${base.padding}
    color: #fff;
    background-color: #1E3038;
`

export const Content = styled.div`
    flex: 1;
    display: flex;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
`

export const Logo = styled.span`
    font-size: 1.2em;
    font-family: ${base.font.koho};
`

export const Navi = styled.nav`
    flex: 1;
    display: flex;
    justify-content:flex-end;
    
    > a {
        font-size: 0.7em;
        align-self: center;
        text-decoration: none;
        color: #fff;
        margin: 10px;
        margin-left: 20px;
    }
    > .donate {
        color: ${base.color.yellow};
        padding-left: 20px;
        border-left: solid 1px #fff;
    }
`

export const HeroFooter = styled(Wrapper)`
    background: ${base.color.yellow};
    align-items: center;
    min-height: 20%;
    display: flex;
    justify-contents: center;
    position: relative;
`

export const Faq = styled.div`
    word-spacing: 0px;
    letter-spacing: -1px;
    font-size: 2em;
    line-height: 0.92em;
    font-family: ${base.font.roboto};
    font-weight: bolder;
    color: #fff;
    width: 25%;
`
export const OptionWrapper = styled(Faq)`
    display: flex;
    flex-direction: row;
    align-self: center;
`
export const CountWrapper = styled.div`
    font-weight: normal;
    font-size: 2em;
    letter-spacing: -11px;
    margin-right: 8px;
    align-self: center;
    color: #7D6439;

`
export const LabelWrapper = styled.div`
    text-transform: uppercase;
    font-size: 0.5em;
    line-height: 1em;
    color: ${base.color.black};
`