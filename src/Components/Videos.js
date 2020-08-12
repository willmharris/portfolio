import React from 'react'
import {Button} from 'semantic-ui-react'
import ReactPlayer from 'react-player/youtube'

function Videos() {
    return(
        <div>
            <Button>Test button</Button>
            <span>Humanz Mediate</span>
            <ReactPlayer
                url="https://youtu.be/b-24GeQ3qBk"
            />
            <span>Magic Lyrics</span>
            <ReactPlayer
                url="https://youtu.be/MyBmAAnP6RA"
            />
            <span>Tweet Mapper</span>
            <ReactPlayer
                url="https://youtu.be/iH8Nqe0EniM"
            />
        </div>
    )
}

export default Videos