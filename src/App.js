import React from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, Theme } from './utils/Styles'
import GlobalData from './utils/GlobalData'

import Section from './containers/Section'

class App extends React.Component {
  constructor(props){
    super(props)
    this.classDaysRef = React.createRef()
    this.seniorProfRef = React.createRef()
    this.seniorColRef = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)
    this.prevScroll = 0
  }

  handleScroll(e){
    const top1 = this.classDaysRef.current.offsetTop
    const top2 = this.seniorProfRef.current.offsetTop
    const top3 = this.seniorColRef.current.offsetTop
    const currScroll = window.scrollY

    console.log(`1: ${top1} 2: ${top2} 3: ${top3} scroll: ${currScroll}`)
    // let scrollingUp = this.prevScroll > window.scrollY
    // if(!scrollingUp){
    // }
    if(currScroll > top1 && currScroll < top2){
      console.log('check1')
    }
    if(currScroll > top2 && currScroll < top3){
      console.log('check2')
    }
    if(currScroll > top3){
      console.log('check3')
    }

    this.prevScroll = currScroll
  }

  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll)
      const top1 = this.classDaysRef
      console.log(top1)
      //.current.getBoundingClientRect().top
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
  }

  render(){
    return (
      <ThemeProvider theme={Theme}>
        <React.Fragment>
          <GlobalStyles/>
          <Section name={"Class Days"} data={GlobalData["Class Days"]} _ref={this.classDaysRef}/>
          <Section name={"Senior Profiles"} data={GlobalData["Senior Profiles"]} _ref={this.seniorProfRef}/>
          <Section name={"Senior Columns"} data={GlobalData["Senior Columns"]} _ref={this.seniorColRef}/>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
