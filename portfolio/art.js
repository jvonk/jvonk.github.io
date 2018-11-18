import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const style = {
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
          A few examples of my recent art projects are shown below. <a href="https://coertvonk.com/family/school/johan/art-17290">See more</a>.
        </CardText>
    </Card>
    <Paper style={style} zDepth={3} />
    <Card initiallyExpanded>
        <CardHeader
          title="Book Sculpture"
          subtitle="2017"
          actAsExpander={true}
          showExpandableButton={true}/>
        />
        <CardMedia expandable={true}>
          <img 
              src= "https://coertvonk.com/wp-content/uploads/2017-01-033-768x512.jpg" />
        </CardMedia>
    </Card>
    <Paper style={style} zDepth={3} />
    <Card initiallyExpanded>
        <CardHeader
          title="Charcoal self portrait"
          subtitle="2017"
          actAsExpander={true}
          showExpandableButton={true}/>
        />
        <CardMedia expandable={true}>
          <img
              src= "https://coertvonk.com/wp-content/uploads/2017-01-041-e1484425792630-200x300.jpg"/>
        </CardMedia>
    </Card>
    <Paper style={style} zDepth={3} />
    <Card initiallyExpanded>
        <CardHeader
          title="Van Gogh style acrylic painting"
          subtitle="2017"
          actAsExpander={true}
          showExpandableButton={true}/>
        />
        <CardMedia expandable={true}>
          <img
              src= "https://coertvonk.com/wp-content/uploads/2017-01-043-300x200.jpg" />
        </CardMedia>
    </Card>
    <Paper style={style} zDepth={3} />
    <Card initiallyExpanded>
        <CardHeader
          title="Antelope wire sculpture"
          subtitle="2016"
          actAsExpander={true}
          showExpandableButton={true}/>
        />
        <CardMedia expandable={true}>
          <img
              src= "https://coertvonk.com/wp-content/uploads/2016-01-021-200x300.jpg" />
        </CardMedia>
    </Card>
    <Paper style={style} zDepth={3} />
    <Card initiallyExpanded>
        <CardHeader
          title="Ceramic mug"
          subtitle="2016"
          actAsExpander={true}
          showExpandableButton={true}/>
        />
        <CardMedia expandable={true}>
          <img
              src= "https://coertvonk.com/wp-content/uploads/2016-01-020-Copy-300x300.jpg" />
        </CardMedia>
    </Card>
    <Paper style={style} zDepth={3} />
    <Card initiallyExpanded>
        <CardHeader
          title="Printing Project"
          subtitle="2016"
          actAsExpander={true}
          showExpandableButton={true}/>
        />
        <CardMedia expandable={true}>
          <img
              src= "https://coertvonk.com/wp-content/uploads/2016-01-023-300x300.jpg" />
        </CardMedia>
    </Card>
  </div>
);

export default CardExampleWithAvatar;