import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  width:"100px",
  height:"30px",
  margin:"12",
  
};
const style2 = {
  height:"30px",
  width:"30px",
  padding:"-30px",
};

const RaisedButtonExampleIcon = () => (
  <div>
    <RaisedButton
      href="https://github.com/johanvonk/"
      target="_blank"
      secondary={true}
      icon={<img id="link" class="link" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"  style={style2}/>}
      style={style}
    />
    <RaisedButton
      backgroundColor="#6FEC11"
      href="https://www.khanacademy.org/profile/vonkj/"
      target="_blank"
      icon={<img id="link" class="link" src="https://cdn.kastatic.org/images/avatars/svg/leaf-green.svg" height="30" width="30" style={style2}/>}
      
      style={style}
    />
  </div>
);

export default RaisedButtonExampleIcon;