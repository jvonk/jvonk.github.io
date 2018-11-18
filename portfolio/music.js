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
        I have always enjoyed playing music. <a href="https://coertvonk.com/wp-content/filmpjes/clarinet.mp4">See more</a>.
      </CardText>
    </Card>
    <Paper style={style} zDepth={3} />
    <Card initiallyExpanded>
        <CardHeader
          title="Video"
          />
        <CardMedia>
        <div class="video">
          <video class="video" controls >
              <source src="https://coertvonk.com/wp-content/filmpjes/clarinet.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
          </video>
          </div>
        </CardMedia>
    </Card>
  </div>
);

export default CardExampleWithAvatar;