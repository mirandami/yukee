import React from "react";
import "../main.css"

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {Navigation} from 'swiper';
// import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

class About extends React.Component{

    state = {
        dataArr:[
            {
                title:'Memory of Encaustic Tile',
                broadcastDate:'Broadcast, 2021',
                filmSta:'filming start: 2020.10.11',
            },
            {
                title:'Mirror: Twin Cities',
                broadcastDate:'Broadcast, 2021',
                filmEnd:'filming end: 2020.10.08'
            },
            {
                title:'Mystery of Antiques 3',
                broadcastDate:'Broadcast date, 2021',
                filmSta:'filming start: 2019.09.31',
            },
            {
                title:'And The Winner Is Love',
                broadcastDate:'Broadcast date, 2020.05.28',
                filmSta:'filming start: 2019.04.2?',
                filmEnd:'filming end: 2019.09.06',
            },
            {
                title:'The Love Lasts Two Minds',
                broadcastDate:'Broadcast date, 2020.02.21',
                filmSta:'filming start: 2018.10.16',
                filmEnd:'filming end: 2019.01.16',
                filmExt:'extra filming: 2019.04.24',
            },
            {
                title:'Heavenly Sword and Dragon Slaying Sabre',
                broadcastDate:'Broadcast date, 2019.02.27',
                filmSta:'filming start: 2018.01.0?',
                filmEnd:'filming end: 2018.06.12',
            },
            {
                title:'Ashes of Love',
                broadcastDate:'Broadcast date, 2018.08.02',
                filmSta:'filming start: 2017.06.12',
                filmEnd:'filming end: 2017.10.16'
            },
            {
                title:'Private Shushan Gakuen',
                broadcastDate:'',
                filmSta:'filming start: 2017.03.02',
                filmEnd:'filming end: 2017.05.29',
            },
            {
                title:'Fresh Teachers',
                broadcastDate:'Broadcast date, 2017.03.28',
                filmSta:'filming start: 2016.11.06',
                filmEnd:'filming end: 2016.12.18',
            },
            {
                title:'Man Hunter',
                broadcastDate:'The Princess Weiyoung',
                filmSta:'filming start: 2016.09.08',
                filmEnd:'filming end: 2016.10.06',
            },
            {
                title:'The Princess Weiyoung',
                broadcastDate:'Broadcast date, 2016.11.11',
                filmSta:'filming start: 2015.12.12',
                filmEnd:'filming end: 2016.03.25',
            }
        ],
        // count: 0
    };




    render() {

        return(
            <div className="about" id="about">

                <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css"/>
                    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>

                <div className="about-content">
                    <Swiper id="main"
                            className="about-up-left"
                        // wrapperTag="ul"
                            spaceBetween={70}
                        //每一个内容占53.33，一次显示三个合53.33✖️3＝159.xx，加上内容之间的空白格是160＋70✖️2=300，所以css里面height是300
                        //     spaceBetween={100}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            direction={'vertical'}
                            navigation
                            // responsive={'responsive'}

                    >
                        {this.state.dataArr.map((value, index) =>
                            <SwiperSlide>
                                <div className="entry">
                                    {/*{console.log('this is value ---->', value)}*/}
                                    <div className="title">
                                        <h3>{value.title}</h3>
                                        {/*<h3>{this.state.dataArr[this.state.count]}</h3>*/}
                                        {/*<h3>?????//</h3>*/}
                                    </div>
                                    <div className="body">
                                        <p>{value.broadcastDate}</p>
                                        {/*<p>Broadcast date,</p>*/}
                                        <ul>
                                            <li>{value.filmSta}</li>
                                            <li>{value.filmEnd}</li>
                                            <li>{value.filmExt}</li>
                                            {/*<li>??????</li>*/}
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}

                    </Swiper>
                </div>

                <div className="about-content">
                    <div className="about-up-right">
                        <ul>
                            <li>Name:<span> Chen YuQi</span></li>
                            <li>Born:<span> 29 July 1992</span></li>
                            <li>Height:<span> 164cm</span></li>
                            <li>Hair:<span> Black</span></li>
                            <li>Eyes:<span> Black</span></li>
                            <li>Star Sign:<span> 🦁️</span></li>
                            <li>Education:<span> Bachelor Degree, Jincheng College of Sichuan University</span></li>
                            <li>Agency:<span> SunLight Media, China</span></li>
                        </ul>

                    </div>
                </div>

            </div>
        )
    }
}

export default About
