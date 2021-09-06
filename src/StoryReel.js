import React from 'react'
import Story from './Story'
import './StoryReel.css'
function StoryReel() {
    return (
        <div className="storyReel">
        <Story 
        image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
        profileSrc="https://s3.ap-south-1.amazonaws.com/ot-user-images-v2/672163/us-bbd819844ae57204_1571150778341.jpg"
        title="Abhishek Pandit"
        />   
          <Story 
        image="https://i.ibb.co/xsvZzzW/Screenshot-2020-09-22-16-41-17-206-com-google-android-youtube.jpg"
        profileSrc="https://i.ibb.co/xsvZzzW/Screenshot-2020-09-22-16-41-17-206-com-google-android-youtube.jpg"
        title="Rahul Singh"
        />
          <Story 
        image="https://i.ibb.co/0DDFDFY/Screenshot-2020-09-22-16-41-52-137-com-google-android-youtube.jpg"
        profileSrc="https://i.ibb.co/0DDFDFY/Screenshot-2020-09-22-16-41-52-137-com-google-android-youtube.jpg"
        title="Priya yadhav"
        />
          <Story 
        image="https://i.ibb.co/KhBTw7Z/Screenshot-2020-09-22-16-42-08-693-com-google-android-youtube.jpg"
        profileSrc="https://i.ibb.co/KhBTw7Z/Screenshot-2020-09-22-16-42-08-693-com-google-android-youtube.jpg"
        title="Shuvo das"
        />
        </div>
    )
}

export default StoryReel
