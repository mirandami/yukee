import React from "react";
import {Link} from "react-router-dom";
import pic1 from "../pic/IMG_3789.JPG";
import pic2 from "../pic/IMG_3791.JPG"
import pic3 from "../pic/IMG_0733.JPG"


class Video extends React.Component{
    render() {
        return(
            <div className="resource__detail">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                      crossOrigin="anonymous"/>

                <div className="nav-area2">
                    <h2>Video</h2>
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
                    <div className="resource-collection__container">
                        <h5>粉丝剪辑·BiliBili</h5>
                        <div className="resource-collection__container__content">
                            <div className="resource-collection-left">
                                <div className="row row-cols-1 row-cols-md-3 g-6">
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV14b411V78E">
                                                <img src="http://i1.hdslb.com/bfs/archive/fd8fe87432f14345d54612c0fd1c37fa9b570483.jpg"
                                                     className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">【新版赵敏|陈钰琪×赵敏|倾城一笑】琪敏全笑容合辑</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV1sb41117A4">
                                                <img src="https://i1.hdslb.com/bfs/archive/9203a4844e376c551d7d46e97b8b8e5687300539.jpg"
                                                    className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">陈钰琪这个视频把我笑飞了</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV1m7411V7P8">
                                                <img src="https://i0.hdslb.com/bfs/archive/1601bbd6531f7af5a393249c368c4f1e2723df3c.jpg"
                                                     className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">甜向快剪丨陈钰琪丨BLUEMING</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV1sE411E7T4/?spm_id_from=333.788.videocard.0">
                                                <img src="https://i1.hdslb.com/bfs/archive/f65f54250f4d0c4bcd91c9136cbc2e0584197995.jpg"
                                                     className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">【两世欢】【陈钰琪/风眠晚/原清离】这天下风情千万般，值得觊觎一眼。</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV1TV411U75B">
                                                <img src="https://i0.hdslb.com/bfs/archive/ce430ca9fcc0aba53d2f09b4d4ffafab19edf6de.jpg"
                                                     className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">【陈钰琪/阿原】可爱小表情合集 每天一遍 欢乐无限</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV125411t7Bc">
                                                <img src="https://i2.hdslb.com/bfs/archive/82461361aeff6110acb2fd2c1245c7de69bb3cca.jpg"
                                                     className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">【陈钰琪个人古装混剪|说书人】燃向踩点|听完这段你一笑而过</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="resource-collection__container__detail">*/}
                                {/*    <p>【陈钰琪|秃头踩点|个人向】man on a mission（超厉害踩点！！）</p>*/}
                                {/*    <a href="https://www.bilibili.com/video/BV1Bt411N7mf"> <i className="fas fa-link"> 视频链接</i></a>*/}
                                {/*</div>*/}
                            </div>
                            <div className="resource-collection-right">
                                <iframe className="iframe_video"
                                        src="https://player.bilibili.com/player.html?bvid=BV1Bt411N7mf&page=1&high_quality=1"
                                        scrolling="no" border="0" frameBorder="no" framespacing="0" width="100%" height="500"
                                        allowFullScreen={true}>
                                </iframe>
                            </div>
                        </div>
                        <div className="resource-collection__container__content">
                            <div className="resource-collection-left">
                                {/*<img src={pic1} alt=""/>*/}
                                <iframe className="iframe_video"
                                        src="https://player.bilibili.com/player.html?bvid=BV1W4411L7V3&page=1&high_quality=1"
                                        scrolling="no" border="0" frameBorder="no" framespacing="0" width="100%" height="500"
                                        allowFullScreen={true}>
                                </iframe>
                            </div>
                            <div className="resource-collection-right">
                                <div className="row row-cols-1 row-cols-md-3 g-6">
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV17V411z73Z">
                                                <img src="https://i0.hdslb.com/bfs/archive/8414df70aa700006d671f3c5d436236789a5d362.jpg"
                                                     className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">【2020生贺】陈钰琪丨个人向丨全角色合剪——霍元甲</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV134411v7cS">
                                                <img src="https://i1.hdslb.com/bfs/archive/5c6ef3ecd17e40c45dcbb4b160d0855a0c110dd9.jpg"
                                                     className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">【陈钰琪 | 赵敏】燃向打戏混剪 || 明月天涯</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV1wt411c7eb">
                                                <img src="https://i2.hdslb.com/bfs/archive/4a4e0ae2458769b0cae402d076771e35a4df6a8b.jpg"
                                                     className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">陈钰琪生贺▕ 盐向快剪 ■ 杀手</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV1UE411v782">
                                                <img src="https://i1.hdslb.com/bfs/archive/16f1f741cae4866bc9fcaeaf69d21f52756b725f.jpg"
                                                     className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">【陈钰琪】鲜衣怒马可甜可飒，灿如玫瑰婉丽潇洒‖不谓侠</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV1b7411N7UU">
                                                <img src="https://i0.hdslb.com/bfs/archive/a7407da823ae29e3e05a047feaac84d193cb1a69.jpg"
                                                     className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">【陈钰琪】两世欢||苏幕遮||颜值向||踩点向||对镜梳妆 粉黛愁眉</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV1GE411777e">
                                                <img src="https://i0.hdslb.com/bfs/archive/3f5995741624b4ecb6b17c5d7d04e8bb018fa142.jpg"
                                                     className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">【陈钰琪|两世欢】吹灭小山河||颜值舔屏||副歌打戏超飒||这天下风情千万般 值得觊觎一眼</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="resource-collection__container__content">
                            <div className="resource-collection-left">
                                <div className="row row-cols-1 row-cols-md-3 g-6">
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV1Lb411L7ZV">
                                                <img src="https://i2.hdslb.com/bfs/archive/93cefcd23d696baebb02ab036e4c00a196e62379.jpg"
                                                     className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">【赵敏/陈钰琪】红昭愿丨个人向丨年少风雅鲜衣怒马，眉目刚烈拟作妆嫁</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV1z7411u742/?spm_id_from=333.788.videocard.3">
                                                <img src="https://i2.hdslb.com/bfs/archive/4ec8b51d12da1f76fb79fe6fe6c24e2b05a8f01f.jpg"
                                                     className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">【陈钰琪】【穷开心】沁河县知名捕快</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV1n7411F7DR">
                                                <img src="https://i2.hdslb.com/bfs/archive/a60f152a3ccdf8c2b3fd62195c391ead5a37fecc.jpg"
                                                     className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">【甜向】【陈钰琪】【原姑娘 X 赵敏】《胭脂妆》心头小鹿撞 碧波荡漾</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV1XC4y1a7UT">
                                                <img src="https://i1.hdslb.com/bfs/archive/6014b3bba2c69e5a02b89b87fc3eaeceae4e1b9d.jpg"
                                                     className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">【陈钰琪】现代甜向混剪 | 好像掉进爱情海里 | 你嘴角微微一笑 空气都变甜了</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV1EE411w7i8">
                                                <img src="https://i0.hdslb.com/bfs/archive/1d76171e649cd861d7c88a9ffdebbb517c7a8a08.jpg"
                                                     className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">【陈钰琪】新倚天屠龙记 | 赵敏×刀剑如梦 | 个人向 | 踩点向 | 鲜衣怒马少年时，人间冷暖只自知</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <a href="https://www.bilibili.com/video/BV157411m7Ti">
                                                <img src="https://i2.hdslb.com/bfs/archive/662bd085772648c7d124d995e1fadfa2fd9b65a7.jpg"
                                                     className="card-img-top" alt="..."
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">【陈钰琪 X 家有儿女】</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="resource-collection__container__detail">*/}
                                {/*    <p>【陈钰琪】【鎏英X赵敏】高燃打戏，只为她袖手天下</p>*/}
                                {/*    <a href="https://www.bilibili.com/video/BV174411K7cb"> <i className="fas fa-link"> 视频链接</i></a>*/}
                                {/*</div>*/}
                                {/*<div className="resource-collection__container__detail">*/}
                                {/*    <p>陈钰琪丨一吻便颠倒众生～《处处吻》丨杂志混剪</p>*/}
                                {/*    <a href="https://www.bilibili.com/video/BV1H741167AW"> <i className="fas fa-link"> 视频链接</i></a>*/}
                                {/*</div>*/}
                            </div>
                            <div className="resource-collection-right">
                                {/*<img src={pic3} alt=""/>*/}
                                <iframe className="iframe_video" title="【陈钰琪角色混剪｜江湖打戏向】少年豪气，霜寒一剑，月满雕弓"
                                        src="https://player.bilibili.com/player.html?bvid=BV1Vf4y1m7Ek&page=1&high_quality=1"
                                        scrolling="no" border="0" frameBorder="no" framespacing="0" width="100%" height="500"
                                        allowFullScreen={true}>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Video
