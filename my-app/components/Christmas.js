import React, { useState } from 'react';
import YoutubeEmbed from './YoutubeEmbed';
import Button from '@mui/material/Button';

export const Christmas = () => {
    const [pressed, setPressed] = useState(false);
    return (
        <div className="container" align="center">
            {pressed ? <>
                <img src="merry-christmas.gif" width="100%" />
                <Button variant="contained" color="error" onClick={() => setPressed(false)}>Stop</Button>
            </> : <>
                <img src="baby-yoda.jpg" width="100%" />
                <Button variant="contained" color="error" onClick={() => setPressed(true)}>Claim your present here</Button>
            </>}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className={'row'} width={'100%'}>
                <YoutubeEmbed autoplay={pressed ? 1 : 0} />
            </div>
        </div>
    )
}
// Refresh page not needed
//     useEffect(() => {
//         const interval = setInterval(() => {
//           console.log('This will run every second!');
//           location.reload();
//         }, 1000);
//         return () => clearInterval(interval);
//       }, []);