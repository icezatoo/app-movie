import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhotoIcon from '@material-ui/icons/Photo';
import VideocamIcon from '@material-ui/icons/Videocam';

const MenuMedia = ({ handleChange, selectmoviemedia }) => {
  console.log(selectmoviemedia);
  return (
    <Paper style={{ width: 500 }}>
      <Tabs
        value={selectmoviemedia}
        onChange={handleChange}
        fullWidth
        indicatorColor="secondary"
        textColor="secondary"
      >
        <Tab icon={<VideocamIcon />} label="VIDEO" />
        <Tab icon={<PhotoIcon />} label="BACKDROPS" />
        <Tab icon={<PhotoIcon />} label="POSTERS" />
      </Tabs>
    </Paper>
  );
};

export default MenuMedia;
