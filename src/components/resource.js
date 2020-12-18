import React from "react";
import event from "../pic/IMG_3959.JPG"
// import "../main.css";
// import Collection from "./busines";

// import contact from "../pic/WechatIMG107.jpeg"

import {Link} from "react-router-dom";

class Resource extends React.Component {


    render() {
        return(

            <div className="resource" id="resource">

                {/*<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>*/}
                {/*商务，影视，活动*/}
                <img src={event} alt=""/>
                <div className="resource__content">
                    <div className="resource-cate">
                        <div className="cate">
                            <Link to={'/collection'}>
                                <h1>Collection</h1>
                            </Link>
                        </div>
                        <div className="cate">
                            <Link to="/video">
                                <h1>Video</h1>
                            </Link>
                        </div>
                        <div className="cate">
                            <Link to="/film">
                                <h1>Film</h1>
                            </Link>
                        </div>
                        <div className="cate">
                            <Link to="/event">
                                <h1>Event</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="resource__paragraph">
                        <p> 我想要给大家留下的标签，就是演员，而不是昙花一现，既然是我自己做的决定，就不要后悔，踏踏实实做好现在的工作，做好一名演员。</p> <br/>
                        <p className="p-name">—— 陈钰琪</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Resource
