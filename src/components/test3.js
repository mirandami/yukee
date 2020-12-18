import React from "react";
import "../main.css"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation} from 'swiper';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

class Test3 extends React.Component{

    state = {
        dataArr:[
            // 'Mystery of Antiques 3',
            // 'And The Winner Is Love',
            // 'The Love Lasts Two Minds',

            {
                title:'Mystery of Antiques 3',
                broadcastDate:'Broadcast date,',
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
            }
        ],
        // count: 0
    };

    // componentDidMount() {
    //     var mySwiper = new Swiper('.swiper-container', {
    //         navigation: {
    //             nextEl: '.swiper-button-next',
    //             prevEl: '.swiper-button-prev',
    //         },
    //     });
    // }


    render() {

        const slides = [];

        for (let i = 0; i < 5; i += 1) {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    {this.state.dataArr.map((value, index) =>
                        <h3>{value.title}</h3>
                    )}
                </SwiperSlide>
            )
        }


        return(
            <div className="about">
                <Swiper id="main"
                        className="about-up-left"
                    // wrapperTag="ul"
                        spaceBetween={0}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        direction={'vertical'}
                        navigation
                >
                    <Swiper/>
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

                <div className="about-up-right">

                </div>

            </div>
        )
    }
}

export default Test3