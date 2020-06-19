import React from 'react';

import './player-icon.css';

const PlayerIcon = (props) => (
    <div className='player-icon'>
        <div className='chipStack-div'>
            {props.chipStack}
        </div>
        <div className='username-div'>
            {props.username}
        </div>
    </div>
);

export default PlayerIcon;