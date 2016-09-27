// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
import "normalize.css";
import "spectacle/lib/themes/default/index.css";

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Modularisation and
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              starting with React
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              What are modules?
            </Heading>
            <Heading size={4} textColor="white" margin={10}>
              youtu.be/SsIdWFtp2QA
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote textColor="white">A piece of software with a defined interface between it and the rest of the system</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Quote textColor="primary">it and the rest of the system</Quote>
            <Heading size={4} textColor="black" margin={10}>
              Separation
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Quote textColor="primary">with a defined interface</Quote>
            <Heading size={4} textColor="black" margin={10}>
              Intent
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Naming a module
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Gives life to a piece of code</ListItem></Appear>
              <Appear><ListItem>Provides independence</ListItem></Appear>
              <Appear><ListItem>Allows communication, and therefore sharing</ListItem></Appear>
              <Appear><ListItem>Naming is hard, unless your module is small</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              React
            </Heading>
            <Heading size={4} textColor="white" margin={10}>
              <img src='./logo.svg' className="App-logo" alt="logo" />
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <CodePane
              lang="jsx"
              source={
`React.createComponent({
  render() {
    return <div>Hello World</div>;
  }
});`
              }
              margin="20px auto"
            />
            <Heading size={4} caps textColor="secondary" bgColor="white">
              Hello World component
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <CodePane
              lang="jsx"
              source={
`React.createComponent({
  render: function render() {
    return React.createElement(
      "div",
      null,
      "Hello World"
    );
  }
});`
              }
              margin="20px auto"
            />
            <Heading size={4} caps textColor="secondary" bgColor="white">
              Programatic interface to HTML
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Well defined boundary
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Simple clean interface
                </Heading>
              </Fill>
            </Layout>
            <Heading caps fit>
              20,745 results for ‘react’ on npm
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Javascript Fatigue
            </Heading>
            <br />
            <img src='./javascript-frameworks-days.png' />
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              create-react-app
            </Heading>
            <Heading size={4} caps textColor="secondary" bgColor="white">
              Create React apps with no build configuration.
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              What does it do?
            </Heading>
            <List>
              <Appear><ListItem>It <i>creates</i> a react app</ListItem></Appear>
              <Appear><ListItem>...with opinionated defaults</ListItem></Appear>
              <Appear><ListItem><b>sets up</b> files</ListItem></Appear>
              <Appear><ListItem><b>installs</b> dependencies</ListItem></Appear>
              <Appear><ListItem><b>provides</b> tooling</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <CodePane
              lang="js"
              source={
`{
  "name": "slides",
  "version": "0.1.0",
  "private": true,
  "devDependencies": {
    "react-scripts": "0.6.0"
  },
  "dependencies": {
    "react": "~15.3.2",
    "react-dom": "~15.3.2",
    "spectacle": "~1.2.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}`
              }
              margin="20px auto"
            />
            <Heading size={4} caps textColor="secondary" bgColor="white">
              Package file for these slides
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              react-scripts
            </Heading>
            <List>
              <Appear><ListItem>The underlying engine</ListItem></Appear>
              <Appear><ListItem>More opinionated defaults</ListItem></Appear>
              <Appear><ListItem>Manages transpilation, build, testing, ...</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <CodePane
              source={`npm install -g create-react-app`}
              margin="20px auto"
            />
            <Heading caps size={6} textColor="secondary" bgColor="white">
              Install the command globally
            </Heading>
            <CodePane
              source={`create-react-app my-app`}
              margin="20px auto"
            />
            <Heading caps size={6} textColor="secondary" bgColor="white">
              Create your app
            </Heading>
            <CodePane
              source={
`cd my-app/
npm start`
}
              margin="20px auto"
            />
            <Heading caps size={6} textColor="secondary" bgColor="white">
              Start the app
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Let's play
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
