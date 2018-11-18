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
export default class CardExampleWithAvatar extends React.Component {
    render() {
    return (
      <div>
        <Card initiallyExpanded>
            <CardHeader
              title="Video"
              avatar="https://lh3.googleusercontent.com/-jObxYwpKyBY/WIahpi_PmjI/AAAAAAAAABA/oUR7992MJtA6ac3X_SC7z5gdRpfV6pIzACEwYBhgL/w280-h278-p/oie_oie_overlay%2B%25282%2529.gif"
              />
            <CardMedia>
            <div class="video">
              <video class="video" controls >
                  <source src="https://coertvonk.com/wp-content/shield/a0f6-579d/8dadafd0a2a5752d825a90a18ec8f434.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>
              </div>
            </CardMedia>
        </Card>
      </div>
    );
  }
};