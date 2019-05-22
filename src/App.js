import React from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, Theme } from './utils/Styles'
import GlobalData from './utils/GlobalData'

import Navbar from './components/Navbar'
import Title from './containers/Title'
import Section from './containers/Section'
import Acknowledgements from './components/Acknowledgements'

const sections = ["Class Days", "Senior Profiles", "Senior Columns"]

class App extends React.PureComponent {
  constructor(props){
    super(props)
    this.classDaysRef = React.createRef()
    this.seniorProfRef = React.createRef()
    this.seniorColRef = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)
    this.navigateTo = this.navigateTo.bind(this)
    this.prevScroll = 0
    this.state = {
      navActive: 0
    }
  }

  navigateTo(i){
    switch(i) {
      case 0: 
        window.scrollTo({top: this.classDaysRef.current.offsetTop, behavior: 'smooth'})
        break
      case 1:
        window.scrollTo({top: this.seniorProfRef.current.offsetTop, behavior: 'smooth'})
        break
      case 2:
        window.scrollTo({top: this.seniorColRef.current.offsetTop, behavior: 'smooth'})
        break
      default:
        break
    }
  }

  handleScroll(e){
    const top1 = this.classDaysRef.current.offsetTop
    const top2 = this.seniorProfRef.current.offsetTop
    const top3 = this.seniorColRef.current.offsetTop
    const currScroll = window.scrollY
    const winHeight = window.innerHeight
    const adjustedScroll = currScroll + 0.4 * winHeight

    // let scrollingUp = this.prevScroll > window.scrollY

    if(adjustedScroll > top1 && adjustedScroll < top2){
      this.setState({navActive: 0})
    }
    if(adjustedScroll > top2 && adjustedScroll < top3){
      this.setState({navActive: 1})
    }
    if(adjustedScroll > top3){
      this.setState({navActive: 2})
    }

    this.prevScroll = currScroll
  }

  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
  }

  render(){
    return (
      <ThemeProvider theme={Theme}>
        <React.Fragment>
          <GlobalStyles/>
          <Title sections={sections} navigateTo={this.navigateTo}/>
          <Navbar active={this.state.navActive} sections={sections} navigateTo={this.navigateTo}/>
          <Section 
            name={sections[0]} 
            blurb="Read what keynote speakers had to say to graduating Columbia College, School of Engineering and Applied Science, General Studies, and Barnard students." 
            data={GlobalData[sections[0]]}
            cols={4}
            _ref={this.classDaysRef}
          />
          <Section 
            name={sections[1]} 
            blurb="The class of 2019 has produced incredible leaders, activists, artists, athletes, and more. Here is a selection of some graduating seniors who have made a lasting impact on the campus community." 
            data={GlobalData[sections[1]]} 
            cols={4}
            _ref={this.seniorProfRef}
          />         
          <Section 
            name={sections[2]} 
            blurb="Members of Spectator’s graduating class reflect on their experiences at the organization and how they’ve grown during their time here." 
            data={GlobalData[sections[2]]} 
            col={3}
            _ref={this.seniorColRef}
          />
          <Acknowledgements/>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
