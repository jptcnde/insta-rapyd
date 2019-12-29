import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';
import PhotoList from '../PhotoList';


function AlbumListItem(props) {
  const { title, id } = props;
  const [expanded, setExpanded] = useState(false);

  function handleChange() {
    setExpanded(!expanded);
  }

  return (
    <ExpansionPanel
      expanded={expanded}
      onChange={handleChange}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography variant="body1">
          {title}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {expanded && (
          <PhotoList albumId={id} />
        )}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

AlbumListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default AlbumListItem;