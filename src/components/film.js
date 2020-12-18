import React from 'react';
import {Link} from "react-router-dom";
import liuliwa from "../pic/IMG_4059.JPG";
import jscguanxuan from "../pic/785.jpg";
import jscshaqin from "../pic/IMG_4062.JPG";
import jscyugao from "../pic/IMG_4061.JPG"
import bg from "../pic/WechatIMG107.jpeg";



class Film extends React.Component{
    render() {
        return(
            <div className="resource__detail">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                      crossOrigin="anonymous"/>

                <div className="nav-area2">
                    <h2>Film</h2>
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

                <div className="bg">
                    <img src={bg} alt=""/>
                </div>

                <div className="resource-film">

                    {/*<div className="filmediting">*/}
                    {/*    <h6>两世欢风眠晚，原清离</h6>*/}
                    {/*    <ul>*/}
                    {/*        <li>*/}
                    {/*            <a href="https://m.weibo.cn/5301122572/4434595644654264">*/}
                    {/*                陈钰琪倚天赵敏1080p无台标无水印有字幕cut+剧照+台词本*/}
                    {/*                陈钰琪香蜜鎏英音频+1080p无台标无水印有字幕cut+剧照*/}
                    {/*                陈钰琪锦绣未央拓跋迪720p无台标无水印无字幕cut+台词本*/}
                    {/*                陈钰琪鲜肉老师陈琳1080p无台标无水印有字幕*/}
                    {/*                陈钰琪杂志|写真|广告等（花絮）|不完全整理*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}

                    <div className="film-editing">
                        <h4>Film clip material</h4>
                        <div className="card-columns">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">倚天赵敏</h5>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/status/4362199034160067?">
                                        陈钰琪赵敏1080p无水印有字幕个人柴+部分剧照
                                    </a>
                                </p>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/status/4350516815005596?">
                                        陈钰琪赵敏1080p有字幕无logo+台词本
                                    </a>
                                </p>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/status/4461413948806694?">
                                        陈钰琪赵敏1080P无字幕剪刀手专用柴
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">两世欢风眠晚，原清离</h5>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/status/4475080228639841?">
                                        陈钰琪风眠晚，原清离1080p无水印无字幕分段命名柴，另含配套柴
                                    </a>
                                </p>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/status/4480680324734326?">
                                        陈钰琪风眠晚，原清离1080p无水印无字幕，36集全
                                    </a>
                                </p>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/status/4474703345273172?">
                                        陈钰琪风眠晚台词本1-8集，随剧更新，CV：季冠霖
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">月上重火重雪芝</h5>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/status/4515846314138006?">
                                        陈钰琪重雪芝1080P无水印无字幕分段命名柴+外挂字幕，另含配套柴
                                    </a>
                                </p>
                                <p className="card-text">
                                    <a href=""></a>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">香蜜沉沉烬如霜鎏英</h5>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/status/4365745821596227?">
                                        陈钰琪鎏英音频
                                    </a>
                                </p>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/status/4280886448856893?">
                                        陈钰琪鎏英1080p有字幕cut+剧照
                                    </a>
                                </p>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/status/4275741853835823?">
                                        陈钰琪鎏英1080p无水印无字幕cut
                                    </a>
                                </p>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/status/4469352654675576?">
                                        陈钰琪鎏英台词本，CV：张喆
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">锦绣未央拓拔迪</h5>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/status/4231204091862941?">
                                        陈钰琪拓跋迪720p无台标无水印无字幕cut
                                    </a>
                                </p>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/status/4494299591052943?">
                                        陈钰琪拓跋迪1080P无台标无水印无字幕分段命名柴
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">鲜肉老师陈琳</h5>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/status/4229216775814292?">
                                        陈钰琪陈琳1080p无台标无水印有字幕分段cut
                                    </a>
                                </p>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/status/4516953840609497?">
                                        陈钰琪陈琳分段柴，小破站有合集
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">广告，写真，活动，花絮，含少数采访</h5>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/status/4426983465447767?">
                                        1080p无水印，少数有水印画质低
                                    </a>
                                </p>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/6587543520/4516895691197387">
                                        陈钰琪丨杂志丨采访丨CM丨汇总共42个，多数1080p
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">侠捕之夺命红莲玉伽</h5>
                                <p className="card-text">
                                    <a href="https://m.weibo.cn/status/4476585820383194?">
                                        陈钰琪玉伽1080p有水印有台标有字幕
                                    </a>
                                </p>
                                <p className="card-text">
                                    <a href=""></a>
                                </p>
                            </div>
                        </div>


                        {/*<div className="card">*/}
                        {/*    <img src={liuliwa} className="card-img-top" alt="..."/>*/}
                        {/*    <div className="card-body">*/}
                        {/*        <h5 className="card-title">昔有琉璃瓦开机</h5>*/}
                        {/*        <p>*/}
                        {/*            Source:*/}
                        {/*            <a href="https://m.weibo.cn/5829543885/4558911657745118">开机官宣1</a>*/}
                        {/*            <a href="https://m.weibo.cn/7506853931/4558900882578211">开机官宣2</a>*/}
                        {/*            <a href="https://m.weibo.cn/7506853931/4558881537397231">开机官宣3</a>*/}
                        {/*        </p>*/}
                        {/*        /!*<p className="card-text">2020年10月11日 image from 陈钰琪</p>*!/*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="card">*/}
                        {/*    <img src={jscguanxuan} className="card-img-top" alt="..."/>*/}
                        {/*    <div className="card-body">*/}
                        {/*        <h5 className="card-title">镜双城官宣</h5>*/}
                        {/*        <p>*/}
                        {/*            Source:*/}
                        {/*            <a href="https://m.weibo.cn/detail/4532699777996170">镜双城官宣</a>*/}
                        {/*        </p>*/}
                        {/*        /!*<p className="card-text">2020年7月30日 image from 镜双城</p>*!/*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="card">*/}
                        {/*    <img src={jscshaqin} className="card-img-top" alt="..."/>*/}
                        {/*    <div className="card-body">*/}
                        {/*        <h5 className="card-title">镜双城杀青</h5>*/}
                        {/*        <p>*/}
                        {/*            Source:*/}
                        {/*            <a href="https://m.weibo.cn/detail/4558056749271361">镜双城杀青</a>*/}
                        {/*            /!*<a href="https://m.weibo.cn/6062714232/4558065070250279">镜双城杀青</a>*!/*/}
                        {/*            <a href="https://m.weibo.cn/6062714232/4558422601898633">杀青特辑视频</a>*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="card">*/}
                        {/*    <img src={jscyugao} className="card-img-top" alt="..."/>*/}
                        {/*    <div className="card-body">*/}
                        {/*        <h5 className="card-title">镜双城预告</h5>*/}
                        {/*        <p>*/}
                        {/*            Source:*/}
                        {/*            <a href="https://m.weibo.cn/6062714232/4564661406270391">预告视频</a>*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Film
