import React from "react";
import {Link} from "react-router-dom";
import fangxin2 from "../pic/IMG_3986.JPG"
import sloggi from "../pic/IMG_4051.JPG"
import coach from "../pic/IMG_4058.JPG"

// import bg from "../pic/WechatIMG107.jpeg"



class Collection extends React.Component{
    render() {
        return (
            <div className="resource__detail">

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                      crossOrigin="anonymous"
                />

                {/*<div>*/}
                    <div className="nav-area2">
                        <h2>Collection</h2>
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

                    {/*<div className="bg">*/}
                    {/*    <img src={bg} alt=""/>*/}
                    {/*</div>*/}

                    <div className="resource-collection">
                        <div className="resource-collection__container__content">
                            <div>
                                <h5>后援会</h5>
                                <div className="resource-collection__container__detail">
                                    陈钰琪粉丝后援会：
                                    <a href="https://weibo.com/u/1763358040?ssl_rnd=1607480539.2087"><i className="fas fa-link"> 网页链接</i></a>
                                </div>
                                <h5>站子</h5>
                                <div className="resource-collection__container__detail">
                                    陈钰琪宇宙站：
                                    <a href="https://weibo.com/u/5669213681"><i className="fas fa-link"> 网页链接</i></a>
                                </div>
                                <div className="resource-collection__container__detail">
                                    Cookies_陈钰琪资源博：
                                    <a href="https://weibo.com/u/7121563172"><i className="fas fa-link"> 网页链接</i></a>
                                </div>
                                <div className="resource-collection__container__detail">
                                    Pumpkin0729·陈钰琪：
                                    <a href="https://weibo.com/u/6883555338"><i className="fas fa-link"> 网页链接</i></a>
                                </div>
                                <div className="resource-collection__container__detail">
                                    琪了怪乐_陈钰琪个站：
                                    <a href="https://weibo.com/u/7319486360"><i className="fas fa-link"> 网页链接</i></a>
                                </div>
                                <div className="resource-collection__container__detail">
                                    MeetYukee_陈钰琪极光站：
                                    <a href="https://weibo.com/u/2717817990"><i className="fas fa-link"> 网页链接</i></a>
                                </div>
                                <div className="resource-collection__container__detail">
                                    陈钰琪前线冲锋站：
                                    <a href="https://weibo.com/u/7511895513"><i className="fas fa-link"> 网页链接</i></a>
                                </div>
                                <div className="resource-collection__container__detail">
                                    陈钰琪净化宣传组：
                                    <a href="https://weibo.com/u/3942973402"><i className="fas fa-link"> 网页链接</i></a>
                                </div>
                                <div className="resource-collection__container__detail">
                                    YuKee陈钰琪私服：
                                    <a href="https://weibo.com/u/1880370280"><i className="fas fa-link"> 网页链接</i></a>
                                </div>
                                <h5>新鲜事</h5>
                                <div className="resource-collection__container__detail">
                                    陈钰琪最新资讯追踪：
                                    <a href="https://m.weibo.cn/c/novelty/detail?card_id=7589125333522433"><i className="fas fa-link"> 网页链接</i></a>
                                </div>
                                <div className="resource-collection__container__detail">
                                    陈钰琪最新美图追踪：
                                    <a href="https://m.weibo.cn/c/novelty/detail?card_id=7580787002611714"><i className="fas fa-link"> 网页链接</i></a>
                                </div>
                                <div className="resource-collection__container__detail">
                                    陈钰琪最新动态追踪：
                                    <a href="https://m.weibo.cn/c/novelty/detail?card_id=7573192276776961"><i className="fas fa-link"> 网页链接</i></a>
                                </div>
                                <div className="resource-collection__container__detail">
                                    倩倩の小天地：
                                    <a href="https://m.weibo.cn/c/novelty/detail?card_id=7579775733899265"><i className="fas fa-link"> 网页链接</i></a>
                                </div>
                            </div>
                            <div className="resource-collection-rightvd">
                                <iframe className="iframe_video"
                                        src="https://player.bilibili.com/player.html?bvid=BV1sb41117A4&page=1&high_quality=1"
                                        scrolling="no" border="0" frameBorder="no" framespacing="0" width="100%" height="90%"
                                        allowFullScreen={true}>
                                </iframe>
                            </div>
                        </div>
                    </div>
                    <div className="resource-collection">
                        <div className="card-columns">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">粉丝整理资源汇总帖</h5>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/3653474443/4340694694973943">
                                            陈钰琪各种资源汇总（各种视频拍摄，时尚，活动...）
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552699431881966">
                                            陈钰琪各种资源汇总2（包括各饭拍，时尚活动...）
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">活动</h5>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4404219266565192">
                                            陈钰琪活动资源汇总
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552637741281872">
                                            陈钰琪活动资源汇总1（公司）
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552688244626037">
                                            陈钰琪活动资源汇总2（公司）
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552687167736317">
                                            陈钰琪活动资源汇总3（商务）
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552687562265529">
                                            陈钰琪活动资源汇总4（商务）
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4559227471273104">
                                            陈钰琪活动资源汇总5（饭拍）
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">时尚·杂志·街拍·写真</h5>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4403880256877424">
                                            陈钰琪时尚·杂志资源汇总1
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552442002016971">
                                            陈钰琪时尚·杂志资源汇总2
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552458405417207">
                                            陈钰琪时尚·杂志资源汇总3
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552571338097986">
                                            陈钰琪时尚·杂志资源汇总4
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552571605483567">
                                            陈钰琪时尚·杂志资源汇总5
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552597720013297">
                                            陈钰琪时尚·杂志资源汇总6
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552598173257258">
                                            陈钰琪时尚·杂志资源汇总7
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4403880316301224">
                                            陈钰琪街拍写真资源汇总
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">语录</h5>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4483374347484326">
                                            陈钰琪语录汇总
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">机场·高铁饭拍</h5>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552690246353758">
                                            陈钰琪机场高铁拍摄汇总
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
                                    <h5 className="card-title">杀青博</h5>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552406162215493">
                                            陈钰琪个人杀青博汇总
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">视频vlog</h5>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/5669213681/4552406396311614">
                                            陈钰琪日常视频vlog汇总
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">剧照</h5>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/5669213681/4552406722947639">
                                            陈钰琪剧照汇总1（公司）
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/5669213681/4552423676579940">
                                            陈钰琪剧照汇总2（官博）
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">应援</h5>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552406609967738">
                                            陈钰琪应援资源汇总
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href=""></a>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">拍摄花絮·读书</h5>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552689290313925">
                                            陈钰琪拍摄花絮资源汇总
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4554050181541828">
                                            陈钰琪读书系列
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">采访</h5>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552656473562300">
                                            陈钰琪采访资源汇总1
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552656809624066">
                                            陈钰琪采访资源汇总2
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/5669213681/4552687057635928">
                                            陈钰琪采访资源汇总3
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">自拍·随拍</h5>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552692087655747">
                                            陈钰琪自拍·随拍资源汇总1（2020）
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552692866744651">
                                            陈钰琪自拍·随拍资源汇总2（2019）
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552693642958158">
                                            陈钰琪自拍·随拍资源汇总3（2018）
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552694875823098">
                                            陈钰琪自拍·随拍资源汇总4（2017）
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552695727785109">
                                            陈钰琪自拍·随拍资源汇总5（2016）
                                        </a>
                                    </p>
                                    <p className="card-text">
                                        <a href="https://m.weibo.cn/detail/4552696335437689">
                                            陈钰琪自拍·随拍资源汇总6（公司）
                                        </a>
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


                    <div className="resource-detail-down">
                        <div className="card-columns">

                            <div className="card">
                                <img src={fangxin2} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">陈钰琪芳芯品牌体验大使</h5>
                                    <p>Source:
                                        <a href="https://m.weibo.cn/5829543885/4545720164813416">陈钰琪芳芯视频</a>
                                        <a href="https://m.weibo.cn/detail/4545811860163646">拍摄花絮</a>
                                    </p>
                                    {/*<p className="card-text">image from 芳芯微博</p>*/}
                                </div>
                            </div>
                            <div className="card">
                                <img src={sloggi} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">陈钰琪sloggi代言人</h5>
                                    <p>Source:
                                        <a href="https://m.weibo.cn/1635883293/4306680088381354">sloggi拍摄花絮</a>
                                    </p>
                                    {/*<p className="card-text">image from sloggi微博</p>*/}
                                </div>
                            </div>
                            <div className="card">
                                <img src={coach} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">coach腕表臻爱大使陈钰琪</h5>
                                    <p>
                                        Source:
                                        <a href="https://m.weibo.cn/5829543885/4531603550241257">陈钰琪微博</a>
                                        <a href="https://m.weibo.cn/5747209783/4531964525412482">陈钰琪coach视频</a>
                                        <a href="https://m.weibo.cn/5829543885/4539966208606300">陈钰琪coach采访</a>
                                        <a href="https://m.weibo.cn/detail/4537875342829488">拍摄花絮</a>
                                        <a href="https://m.weibo.cn/detail/4537771342175797">MadameFigaro微博</a>
                                    </p>
                                    {/*<p className="card-text">image from 陈钰琪</p>*/}
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://wx2.sinaimg.cn/large/006gWHNZly1gi45amc70hj30u012d7wh.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">费加罗八月封面</h5>
                                    <p>
                                        Source:
                                        <a href="https://m.weibo.cn/detail/4542458669826620">MadameFigaro微博</a>
                                        <a href="https://m.weibo.cn/detail/4542594003244253">拍摄花絮</a>
                                    </p>
                                    {/*<p className="card-text">image from 陈钰琪</p>*/}
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://wx3.sinaimg.cn/large/6fa806f4gy1gcmw74bgcbj20ly10n4qq.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">斯凯奇休闲系列品牌大使</h5>
                                    <p>
                                        Source:
                                        <a href="https://m.weibo.cn/detail/4532007298410027">斯凯奇微博1</a>
                                        <a href="https://m.weibo.cn/1873282804/4420068072839869">官博视频1</a>
                                        <a href="https://m.weibo.cn/1873282804/4499477836496138">官博视频2</a>
                                    </p>
                                    {/*<p className="card-text">image from 陈钰琪</p>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                {/*</div>*/}


            </div>
        )
    }
}

export default Collection
