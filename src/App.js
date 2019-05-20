import React from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, Theme } from './utils/Styles'
import GlobalData from './utils/GlobalData'

import Navbar from './components/Navbar'
import Title from './containers/Title'
import Section from './containers/Section'

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
          <Title sections={sections}/>
          <Navbar active={this.state.navActive} sections={sections} navigateTo={this.navigateTo}/>
          <Section 
            name={sections[0]} 
            blurb="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
            data={GlobalData[sections[0]]} 
            _ref={this.classDaysRef}
          />
          <Section 
            name={sections[1]} 
            blurb="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
            data={GlobalData[sections[1]]} 
            _ref={this.seniorProfRef}
            list={[
              {name: "Person Named",
              description: "CC '19"
              },
          
              {name: "Less Important",
              description: "BC '19"
              },
          
              {name: "Person Named",
              description: "CC '19"
              },
          
              {name: "Less Important",
              description: "BC '19"
              },
          
              {name: "Person Named",
              description: "CC '19"
              },
          
              {name: "Less Important",
              description: "BC '19"
              },
          
              {name: "Person Named",
              description: "CC '19"
              },
          
              {name: "Less Important",
              description: "BC '19"
              },
          
              {name: "Person Named",
              description: "CC '19"
              },
          
              {name: "Less Important",
              description: "BC '19"
              },
          
              {name: "Person Named",
              description: "CC '19"
              },
          
              {name: "Less Important",
              description: "BC '19"
              }
            ]}
          />         
          <Section 
            name={sections[2]} 
            blurb="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
            data={GlobalData[sections[2]]} 
            _ref={this.seniorColRef}
            list={[
              {name: "Person Named",
              description: "CC '19"
              },
          
              {name: "Less Important",
              description: "BC '19"
              },
          
              {name: "Person Named",
              description: "CC '19"
              },
          
              {name: "Less Important",
              description: "BC '19"
              },
          
              {name: "Person Named",
              description: "CC '19"
              },
          
              {name: "Less Important",
              description: "BC '19"
              },
          
              {name: "Person Named",
              description: "CC '19"
              },
          
              {name: "Less Important",
              description: "BC '19"
              },
          
              {name: "Person Named",
              description: "CC '19"
              },
          
              {name: "Less Important",
              description: "BC '19"
              },
          
              {name: "Person Named",
              description: "CC '19"
              },
          
              {name: "Less Important",
              description: "BC '19"
              }
            ]}
          />
          </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
