import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
const CardExampleWithAvatar = () => (
  <Card initiallyExpanded>

    <CardHeader
      title="About Me"
      subtitle="Overview"

      actAsExpander={true}
      showExpandableButton={true}avatar="https://lh3.googleusercontent.com/-jObxYwpKyBY/WIahpi_PmjI/AAAAAAAAABA/oUR7992MJtA6ac3X_SC7z5gdRpfV6pIzACEwYBhgL/w280-h278-p/oie_oie_overlay%2B%25282%2529.gif"/>

    <CardMedia expandable={true} overlay={<CardTitle title="This is me"  />}>
      <div id="resize">
        <img src="https://lh3.googleusercontent.com/2NH_P0l-y0nnt2ipHLugwwl2302BEL7cSal178CYyQqSFW2U0p4_2v7hbvIkb6uc73mMVntCh0lsaMABCcfjiOKKjoLN2OGSDKYVuOag1DwgOP8G-1eIdTB5aLwavGKKGnFtvIQDyISZIMsMNy30u-3iEPsfpG-tgBOLVQTF4Rb8Iq3ZbxcFYoKgbQNrvrqC2UF1VBx1yOALE8SWMENbuX4pqVlWBZYfIoeocCVNO2bpLGvh7j2kR2SEybWrJ-JnUCsHVrBJQq28j29qqre4c8Ka_sa6dpnsYkNhbbGa9zxu7WinvzlBHW_3E5p14O1_ByWOzE4VCTwGTMKho_YkioQXfr07kanGazfsUeSXGuovH_0agoJj4Haw1U4Es3dzvgyzXTuEUNw91hpTGIqkzBsbYk9r9opMFeXjEj0YQ6vQjJBRzSQUAXGMkHuDSjWd2A45ADoS2IZ5QhDiyqQIlAuZUevCDyuUAcanR184BJXwJpR8m-14PwFyOqBM_UW7O-r3Kc7j6AIaCwpbIY5YgJ_G2Cp_2MnbPHxKkYG6V-WKM_Qe4iyBlKfxK6H5wZYFNkyWa3whmhCbpd0o-7Lv9F0_2LRFZD42_3Cs6cAL4VCwmbyN7VYpH04OIl87cjzActSVEdhtH-OOgEtIe6YuguD14YIjelG9jBKg=w1404-h2106-no" alt="deny everything" />
      </div>
    </CardMedia>


    <CardText>
      I enjoy many things such as .... 
    </CardText>


  </Card>
);

export default CardExampleWithAvatar;