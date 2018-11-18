import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
const style1 = {
  controls:"controls",
  onmouseover:"this.play()",
  onmouseout:"this.pause()",
};
const style = {
  height: 5,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
const CardExampleWithAvatar = () => (
  <div>
    <Card initiallyExpanded>
      <CardHeader
        title="Overview"
        avatar="https://lh3.googleusercontent.com/-jObxYwpKyBY/WIahpi_PmjI/AAAAAAAAABA/oUR7992MJtA6ac3X_SC7z5gdRpfV6pIzACEwYBhgL/w280-h278-p/oie_oie_overlay%2B%25282%2529.gif"
        />
      <CardText>
        I have enjoyed a great many hours in a pursuit of science. My ambition is to solve real problems using math and science. <a href="https://coertvonk.com/family/school/johan/math-science-17331">See more</a>.
      </CardText>
    </Card>
    <Paper style={style} zDepth={3} />
    <Card initiallyExpanded>
      <CardHeader
        title="Pitch Detection on Arduino using Autocorrelation"
        subtitle="2015"
        actAsExpander={true}
        showExpandableButton={true}/>
      />
      <CardText>
        A device that recognizes the notes played on a musical instrument. 1st place in the Silicon Valley science competition. <a href="https://coertvonk.com/technology/embedded/arduino-pitch-detector-13252">See more</a>.
      </CardText>
      <CardMedia expandable={true}>
        <img 
          src= "https://coertvonk.com/wp-content/uploads/icon-logo21.jpg" />
      </CardMedia>
    </Card>
    <Paper style={style} zDepth={3} />
    <Card initiallyExpanded>
      <CardHeader
        title="Building Math Hardware"
        subtitle="2016"
        actAsExpander={true}
        showExpandableButton={true}/>
      />
      <CardText>
        This article shows some implementation of the math operations introduced in chapter 7 of the inquiry “How do computers do Math?” The combinational logic is described in the HDL Verilog 2001. <a href="https://coertvonk.com/family/school/johan/applied-math-17591">Not yet released</a>.
      </CardText>
      <CardMedia expandable={true}>
        <img 
          src= "https://coertvonk.com/wp-content/uploads/buildingmath2.jpg" />
      </CardMedia>
    </Card>
    <Paper style={style} zDepth={3} />
  </div>
);

export default CardExampleWithAvatar;