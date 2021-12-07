import React, { useState } from 'react';
import YoutubeEmbed from './YoutubeEmbed';

export const Christmas = ({christmas}) => {
    return(
        <div className="container">
            <img src="baby-yoda.jpg" width="100%"/>
            
            <div className={'row'} width={'100%'} hidden={true}>
                <YoutubeEmbed embedId={'E8gmARGvPlI'}/>
            </div>
        </div>
    )
}
