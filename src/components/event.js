import React from 'react';
import {Link} from "react-router-dom";
import forevermark from "../pic/IMG_3964.JPG"
import coach from "../pic/IMG_4054.JPG"
import elle from "../pic/IMG_4055.JPG"
import bg from "../pic/WechatIMG107.jpeg";


class Event extends React.Component{

    state = {
        eventArr:[
            {
                title: 'Forevermark发布会',
                date: '2020年11月8日',
                img:'https://wx2.sinaimg.cn/mw690/3beb4011ly1gki0yvn043j22gq3p31l6.jpg',
                item: [
                    {
                        sn:'丰璟盛糖1',
                        sw:'https://m.weibo.cn/1005273105/4569082358404473',
                    },
                    {
                        sn:'丰璟盛糖2',
                        sw:'https://m.weibo.cn/1005273105/4569028879976202',
                    },
                    {
                        sn:'南京潮人',
                        sw:'https://m.weibo.cn/2489834492/4569060195180437',
                    },
                    {
                        sn:'Pumpkin0729·陈钰琪',
                        sw:'https://m.weibo.cn/6883555338/4569020408005074',
                    },
                    {
                        sn:'江苏娱乐头条视频',
                        sw:'https://m.weibo.cn/2489868960/4569050342233894',
                    },
                    {
                        sn:'陈钰琪宇宙站',
                        sw:'https://m.weibo.cn/5669213681/4569027706360109',
                    },
                    {
                        sn:'琪了怪乐视频',
                        sw:'https://m.weibo.cn/7319486360/4569042805588896',
                    },
                ],
            },
            {
                title: 'COACH2020第三届中国国际进口博览会',
                date:'2020年11月7日',
                img: 'https://wx2.sinaimg.cn/mw690/3beb4011ly1gkgmxbpgr3j21dc0wwhdt.jpg',
                item:[
                    {
                        sn:'丰璟盛糖1',
                        sw:'https://m.weibo.cn/1005273105/4568646645711869',
                    },
                    {
                        sn:'丰璟盛糖2',
                        sw:'https://m.weibo.cn/1005273105/4568671375331881',
                    },
                    {
                        sn:'coach微博',
                        sw:'https://m.weibo.cn/1916986680/4568712441758199',
                    },
                ],
            },
            {
                title: 'ELLE风尚大典',
                date:'2020年10月25日',
                img: 'https://wx1.sinaimg.cn/mw690/3beb4011gy1gk1qp28b43j227f3b4x6r.jpg',
                item:[
                    {
                        sn:'ELLE官方视频',
                        sw:'https://m.weibo.cn/1273610165/4564755190915173',
                    },
                    {
                        sn:'丰璟盛糖',
                        sw:'https://m.weibo.cn/1005273105/4563978002629379',
                    },
                    {
                        sn:'琪了怪乐',
                        sw:'https://m.weibo.cn/7319486360/4564186908855716',
                    },
                    {
                        sn:'陈钰琪宇宙站',
                        sw:'https://m.weibo.cn/5669213681/4564204928112040',
                    },
                    {
                        sn:'Pumpkin0729·陈钰琪视频',
                        sw:'https://m.weibo.cn/6883555338/4565463714238517',
                    },
                    {
                        sn:'芒果影音视频',
                        sw:'https://m.weibo.cn/3223747774/4563952481341126',
                    },
                    {
                        sn:'盛夏晚风 | 陈钰琪',
                        sw:'https://m.weibo.cn/6576245959/4564060437217824',
                    },
                ],
            },
            {
                title: '2020COSMO时尚盛典',
                date:'2020年12月2日',
                img: 'https://wx1.sinaimg.cn/mw690/006mwaFnly1gl9om4wl5nj62tc480b2k02.jpg',
                item:[
                    {
                        sn:'ELLE官方视频',
                        sw:'https://m.weibo.cn/detail/4577738260744434',
                    },
                    {
                        sn:'丰璟盛糖',
                        sw:'https://m.weibo.cn/detail/4577773190385345',
                    },
                    {
                        sn:'陈钰琪1',
                        sw:'https://m.weibo.cn/detail/4577743515169058',
                    },
                    {
                        sn:'陈钰琪2',
                        sw:'https://m.weibo.cn/detail/4577751552236857',
                    },
                    {
                        sn:'后援会dy搬运',
                        sw:'https://m.weibo.cn/detail/4577719838320620',
                    },
                ],
            }
        ]
    };


    render() {
        return(
            <div className="resource__detail">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                      crossOrigin="anonymous"/>

                <div className="nav-area2">
                    <h2>Event</h2>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link class="nav-link" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link active" to={'/collection'}>Collection</Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to={'/video'}>Video</Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link active" to={'/film'}>Film</Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link active" to={'/event'}>Event</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-area2">

                </div>

                {/*<div className="bg">*/}
                {/*    <img src={bg} alt=""/>*/}
                {/*</div>*/}

                <div className="resource-detail-down">
                    <div className="card-columns">
                        {this.state.eventArr.map((value, index) =>
                            <div className="card">
                                <img src={value.img} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    {console.log(value.img)}
                                    <h5 className="card-title">{value.title}</h5>
                                    {/*{console.log(value.item)}*/}
                                    {/*{value.item?.map((item, index) =>*/}
                                        <p>
                                            Source:
                                            {value.item?.map((item, index) =>
                                            // {/*{console.log('itemmmmm---->', item)}*/}
                                            <a href={item.sw}>{item.sn}</a>
                                            )}
                                        </p>
                                    {/*// )}*/}
                                    <p className="card-text">2020年11月8日</p>
                                </div>
                            </div>
                        )}
                        {/*<div className="card">*/}
                        {/*    <img src={forevermark} className="card-img-top" alt="..."/>*/}
                        {/*    <div className="card-body">*/}
                        {/*        <h5 className="card-title">Forevermark发布会</h5>*/}
                        {/*        <p>Source:*/}
                        {/*            <a href="https://m.weibo.cn/1005273105/4569082358404473">丰璟盛糖1</a>*/}
                        {/*            <a href="https://m.weibo.cn/1005273105/4569028879976202">丰璟盛糖2</a>*/}
                        {/*            <a href="https://m.weibo.cn/2489834492/4569060195180437">南京潮人</a>*/}
                        {/*            <a href="https://m.weibo.cn/6883555338/4569020408005074">Pumpkin0729·陈钰琪</a>*/}
                        {/*            <a href="https://m.weibo.cn/2489868960/4569050342233894">江苏娱乐头条视频</a>*/}
                        {/*            <a href="https://m.weibo.cn/5669213681/4569027706360109">陈钰琪宇宙站</a>*/}
                        {/*            <a href="https://m.weibo.cn/7319486360/4569042805588896">琪了怪乐视频</a>*/}
                        {/*        </p>*/}
                        {/*        <p className="card-text">2020年11月8日</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default Event
