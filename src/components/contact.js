import React from "react";

class Contact extends React.Component {
    render() {
        return(
            <div className="contact" id="contact">
                {/*<h2>Info/Contact</h2>*/}
                <div className="contact-left">
                    <a href="https://weibo.com/u/5829543885">
                        <i className="fab fa-weibo"></i>
                        <h6>weibo ID: 陈钰琪Yukee</h6>
                    </a>
                    <a href="https://www.iesdouyin.com/share/user/93378652232?u_code=14h0i2im6&did=49117208788&iid=75037678125&sec_uid=MS4wLjABAAAAhTZ6RemvE4X2asHlWop9rdBHrNOpgnkrdRS4SgAkD3I&utm_campaign=client_share&app=aweme&utm_medium=ios&tt_from=copy&utm_source=copy">
                        <i className="fab fa-tiktok"></i>
                        <h6>douyin ID: YukeeCYQ</h6>
                    </a>
                    <a href="https://instagram.com/yukee_c?igshid=wrj1cxpzyqcb">
                        <i className="fab fa-instagram"></i>
                        <h6>ins ID: yukee_c</h6>
                    </a>
                    <div className="contact-email">
                        <i className="fas fa-envelope"></i>
                        <h6>work info please send to: work@sunlight-media.cn</h6>
                    </div>
                </div>
                <div className="contact-right">
                    {/*<img src={contact}/>*/}
                </div>

                <h3>Agency</h3>
                <a href="https://weibo.com/u/1005273105">
                    <i className="fab fa-weibo"></i>
                    <h6>weibo ID: 丰璟盛糖</h6>
                </a>

            </div>
        )
    }
}

export default Contact
