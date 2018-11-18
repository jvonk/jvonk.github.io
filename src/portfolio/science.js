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
    <Card>
      <CardHeader
        title="Flight inquiry"
        subtitle="2010"/>
      />
      <CardText>
        Inquiry into flight. Video presentation from our school project. <a href="https://coertvonk.com/family/school/flight-inquiry-2834">See more</a>.
      </CardText>
    </Card>
    <Paper style={style} zDepth={3} />
    <Card>
      <CardHeader
        title="Land veroverd op de zee"
        subtitle="2011"/>
      />
      <CardText>
        How the Dutch make land from water. Filmed on location in the Netherlands. <a href="https://coertvonk.com/family/school/flight-inquiry-2834">See more</a>.
      </CardText>
    </Card>

    <Paper style={style} zDepth={3} />
    
    <Card initiallyExpanded>
      <CardHeader
        title="Lectures by Walter Lewin (MIT)"
        actAsExpander={true}
        showExpandableButton={true}/>
      />
      <CardMedia expandable={true}>
        <img 
          src= "https://coertvonk.com/wp-content/uploads/walterlewin.jpg" />
      </CardMedia>
      <CardText>
        <a href="https://www.youtube.com/channel/UCiEHVhv0SBMpP75JbzJShqw">See more</a>.
      </CardText>
    </Card>

    <Paper style={style} zDepth={3} />
    
    <Card initiallyExpanded>
      <CardHeader
        title="NOVA, TED Talks"
      />
    </Card>

    <Paper style={style} zDepth={3} />
    
    <Card initiallyExpanded>
      <CardHeader
        title="Stanford Splash"
      />
      <CardText>
        Participated from 2014-2017. <a href="https://stanfordesp.org/">See more</a>.
      </CardText>
    </Card>

    <Paper style={style} zDepth={3} />
    
    <Card initiallyExpanded>
      <CardHeader
        title="Flour, yeast, water and salt makes bread"
        actAsExpander={true}
        showExpandableButton={true}/>
      />
      <CardMedia expandable={true}>
        <img 
          src= "https://coertvonk.com/wp-content/uploads/school-bread.jpg" />
      </CardMedia>
      <CardText>
        Baking bread is an experiment in biochemistry. The fermentation makes the bread chewy, fluffy and tasty. <a href="https://coertvonk.com/technology/inquiries/yeast-in-bread-6043">See more</a>.
      </CardText>
    </Card>

    <Paper style={style} zDepth={3} />
    
    <Card initiallyExpanded>
      <CardHeader
        title="How do computers do math?"
        actAsExpander={true}
        showExpandableButton={true}/>
      />
      <CardMedia expandable={true}>
        <img width="100% !important" src="https://coertvonk.com/wp-content/uploads/math-logo-theory.svg" />
      </CardMedia>
      <CardText>
        Solid-state chemistry, Ohm’s law, semi-conductors, logic gates and combinational logic, simple arithmetic logic unit. <a href="https://coertvonk.com/technology/logic/computer-math-inquiry-4245">See more</a>.
      </CardText>
    </Card>

    <Paper style={style} zDepth={3} />
    
    <Card initiallyExpanded>
      <CardHeader
        title="How do microprocessors work?"
        subtitle="2011"
        actAsExpander={true}
        showExpandableButton={true}/>
      />
      <CardMedia expandable={true}>
        <img 
          src="https://coertvonk.com/wp-content/uploads/school-microprocessor.png" />
      </CardMedia>
      <CardText>
        Baking bread is an experiment in biochemistry. The fermentation makes the bread chewy, fluffy and tasty. <a href="https://coertvonk.com/technology/logic/microprocessor-inquiry-3945">See more</a>.
      </CardText>
    </Card>

    <Paper style={style} zDepth={3} />
    
    <Card initiallyExpanded>
      <CardHeader
        title="Electromagnetism Inquiry"
        subtitle="2012"
        actAsExpander={true}
        showExpandableButton={true}/>
      />
      <CardMedia expandable={true}>
        <img src= "https://coertvonk.com/wp-content/uploads/school-magnets.png" />
      </CardMedia>
      <CardText>
        Starting from electrons spinning around their axis to electromagnetic fields. <a href="https://coertvonk.com/technology/embedded/arduino-webserver-using-jquerymobile-and-jsfiddle-11803">See more</a>.
      </CardText>
    </Card>

    <Paper style={style} zDepth={3} />
    
    <Card initiallyExpanded>
      <CardHeader
        title="Web browser accessing Arduino data"
        subtitle="2015"
        actAsExpander={true}
        showExpandableButton={true}/>
      />
      <CardMedia expandable={true}>
        <img 
          src= "https://coertvonk.com/wp-content/uploads/RGB-LED_bb.png" />
      </CardMedia>
      <CardText>
        Shows how an external web site can change i/o values on your Arduino. <a href="https://coertvonk.com/technology/embedded/arduino-webserver-using-jquerymobile-and-jsfiddle-11803">See more</a>.
      </CardText>
    </Card>

    <Paper style={style} zDepth={3} />
    
    <Card initiallyExpanded>
      <CardHeader
        title="Soldering equipment and projects for kids"
        actAsExpander={true}
        showExpandableButton={true}/>
      />
      <CardMedia expandable={true}>
        <img 
          src= "https://coertvonk.com/wp-content/uploads/weller.png" />
      </CardMedia>
      <CardText>
        <a href="https://coertvonk.com/technology/electronics/soldering-with-kids-15726">See more</a>.
      </CardText>
    </Card>
  </div>
);

export default CardExampleWithAvatar;