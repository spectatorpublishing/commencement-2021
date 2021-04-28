import React from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, Theme } from './utils/Styles'
import GlobalData from './utils/GlobalData'

import Navbar from './components/Navbar'
import Title from './containers/Title'
import Section from './containers/Section'
import Acknowledgements from './components/Acknowledgements'
import Articles from './containers/Articles'
import SeniorAds from './containers/SeniorAds';

const sectionNames = [
  "Class Days",
  "Senior Columns",
  "News",
  "Sports",
  "A&E",
  "Senior Ads"
]

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
    };

    this.sections = {
      "Class Days": {
        description: "Read what this year's keynote speakers had to say to graduating Columbia College, School of Engineering and Applied Science, General Studies, and Barnard students.",
        ref: this.classDaysRef,
        ad: "https://commencement2021.s3.amazonaws.com/am-studies-dept-ad.png"
      },
      "Senior Columns": {
        description: "Members of Spectator’s graduating class reflect on what they’ve learned and how they’ve grown from their time at the organization.",
        ref: this.seniorColRef,
        ad: "https://commencement2021.s3.amazonaws.com/cs-dept-ad.png"
      }
    };
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
    // const top2 = this.seniorProfRef.current.offsetTop
    const top2 = this.seniorColRef.current.offsetTop
    const currScroll = window.scrollY
    const winHeight = window.innerHeight
    const adjustedScroll = currScroll + 0.4 * winHeight

    // let scrollingUp = this.prevScroll > window.scrollY

    if(adjustedScroll > top1 && adjustedScroll < top2){
      this.setState({navActive: 0})
    }
    if(adjustedScroll > top2) { // && adjustedScroll < top3
      this.setState({navActive: 1})
    }
    // if(adjustedScroll > top3){
    //   this.setState({navActive: 2})
    // }

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
          <Title sections={sectionNames} navigateTo={this.navigateTo}/>
          {/* <Navbar active={this.state.navActive} sections={Object.keys(this.sections)} navigateTo={this.navigateTo}/> */}
          {
            Object.keys(this.sections).map(section => (
              <Section 
              name={section} 
              blurb={this.sections[section].description} 
              ad={this.sections[section].ad}
              data={GlobalData[section]} 
              _ref={this.sections[section].ref}
            />
            ))
          }
          <Articles 
            sections={[
              {
                title: "News",
                articles: GlobalData.News
              },
              {
                title: "Sports",
                articles: GlobalData.Sports
              },
              {
                title: "Arts and Entertainment",
                articles: GlobalData["Arts and Entertainment"]
              }
            ]}
          />
          <SeniorAds 
            ads={[
              {
                img: "https://steamuserimages-a.akamaihd.net/ugc/887630550045153287/7DD753A52C8BB98273532E12463385BE36E85968/",
                title: "Joy Fan, Columbia College",
                description: "We love you! -Parents"
              },
              {
                img: "https://steamuserimages-a.akamaihd.net/ugc/887630550045153287/7DD753A52C8BB98273532E12463385BE36E85968/",
                title: "Joy Fan, Columbia College",
                description: "We love you! -Parents"
              },
              {
                img: "https://steamuserimages-a.akamaihd.net/ugc/887630550045153287/7DD753A52C8BB98273532E12463385BE36E85968/",
                title: "Joy Fan, Columbia College",
                description: "We love you! -Parents"
              },
              {
                img: "https://steamuserimages-a.akamaihd.net/ugc/887630550045153287/7DD753A52C8BB98273532E12463385BE36E85968/",
                title: "Joy Fan, Columbia College",
                description: "We love you! -Parents"
              },
              {
                img: "https://steamuserimages-a.akamaihd.net/ugc/887630550045153287/7DD753A52C8BB98273532E12463385BE36E85968/",
                title: "Joy Fan, Columbia College",
                description: "We love you! -Parents"
              },
              {
                img: "https://steamuserimages-a.akamaihd.net/ugc/887630550045153287/7DD753A52C8BB98273532E12463385BE36E85968/",
                title: "Joy Fan, Columbia College",
                description: "We love you! -Parents"
              },
            ]}
          />
          <Acknowledgements/>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
