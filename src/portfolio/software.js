import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const style = {
  height: 5,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};
const CardExampleWithAvatar = () => (
  <div>
    <Card initiallyExpanded>
      <CardHeader
        title="Overview"
      avatar="https://lh3.googleusercontent.com/-jObxYwpKyBY/WIahpi_PmjI/AAAAAAAAABA/oUR7992MJtA6ac3X_SC7z5gdRpfV6pIzACEwYBhgL/w280-h278-p/oie_oie_overlay%2B%25282%2529.gif"
        />
      <CardText>
        I deeply enjoy writing software because it allows me to creat anything that I can imagine. <a href="https://coertvonk.com/family/school/johan/software-17336">See more</a>.
      </CardText>
    </Card>

    <Paper style={style} zDepth={3} />

    <Card initiallyExpanded>
      <CardHeader
        title="Countdown();"
        subtitle="Christmas countdown animation that I wrote in NodeJS"
        actAsExpander={true}
        showExpandableButton={true}
        />
      <CardMedia expandable={true} overlay={
      <CardTitle title="My Project" subtitle="The html isn't perfect here so go to Khan Academy" />
      } style={styles.slide}>
      <iframe src="https://coertvonk.com/jvonk/countdown.html" width="400px" height="400px" frameBorder="0"></iframe>
      </CardMedia>
      <CardText>
        My code for this project can be found at <a href="https://github.com/johanvonk/Coutdown2016">Github</a> or <a href="https://www.khanacademy.org/computer-programming/countdown2016/6643998558650368">Khan Academy</a>. <a href = "https://coertvonk.com/technology/javascript/countdown-17288">See more</a>. 
      </CardText>
    </Card>

    <Paper style={style} zDepth={3} />

    <Card initiallyExpanded>
      <CardHeader
        title="Mandelbroot"
        subtitle="A zoomable Mandelbrot sequence using Node JS. "
        actAsExpander={true}
        showExpandableButton={true}/>
      <CardMedia expandable={true} overlay={
      <CardTitle title="My Project" subtitle="For some reason the user input isn't working in the iframe so go to Khan Academy"/>
      }>
      <iframe src="https://coertvonk.com/jvonk/mandelbrot.html" width="400px" height="400px" frameBorder="0"></iframe>
      </CardMedia>
      <CardText>
        <p>My code for this project can be found at <a href="//github.com/johanvonk/mandelbrot">Github</a> or <a href="//www.khanacademy.org/computer-programming/mandelbroot/5901719466934272">Khan Academy</a>.  <a href = "https://coertvonk.com/technology/javascript/mandelbrot-17286">See more</a>. For some reason the iframe works there?!</p>
      </CardText>
    </Card>

    <Paper style={style} zDepth={3} />

    <Card initiallyExpanded>
      <CardHeader
        actAsExpander={true}
        showExpandableButton={true}
        title="Arduino"/>
      />
      <CardMedia expandable={true}>
        <img 
          src= "https://coertvonk.com/wp-content/uploads/arduino101.png" />
      </CardMedia>
      <CardText>
        Getting started with Arduino. Breakout and shields. Development environment. <a href="https://coertvonk.com/technology/embedded/arduino-101-11521">See more</a>.
      </CardText>
    </Card>

    <Paper style={style} zDepth={3} />
    
    <Card initiallyExpanded>
      <CardHeader
        actAsExpander={true}
        showExpandableButton={true}
        title="Web browser accessing Arduino data"/>
      />
      <CardMedia expandable={true}>
        <img 
          src= "https://coertvonk.com/wp-content/uploads/rgbled_jsfiddle.jpg" />
      </CardMedia>
      <CardText>
        Shows how an external web site can change i/o values on your Arduino. <a href="https://coertvonk.com/technology/embedded/arduino-webserver-using-jquerymobile-and-jsfiddle-11803">See more</a>.
      </CardText>
    </Card>
  </div>
);

export default CardExampleWithAvatar;