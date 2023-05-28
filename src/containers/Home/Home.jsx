import { Button } from 'components/Button';
import { Card } from 'components/Card/Card';
import { PrimaryLayout } from 'components/Layout';
import styled from 'styled-components';
import discoverImg from 'assets/images/discover1.svg'
import aution1Img from 'assets/images/auction1.svg'
import aution2Img from 'assets/images/auction2.svg'
import { TimeButton } from 'components/Button';
import avatar1 from 'assets/images/avatar.svg'
import avatar2 from 'assets/images/avatar2.svg'
import slide1 from 'assets/images/slides/slide1.jpeg'
import ethDarkIcon from 'assets/icons/eth-dark.svg'
import Eth from 'components/Eth';
import Creator from 'components/Creator';

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a 
// import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

import Creatoravatar1 from 'assets/images/avatars/avatar1.svg'
import Creatoravatar2 from 'assets/images/avatars/avatar2.svg'
import Creatoravatar3 from 'assets/images/avatars/avatar3.svg'
import Creatoravatar4 from 'assets/images/avatars/avatar4.svg'
import Creatoravatar5 from 'assets/images/avatars/avatar5.svg'
import Creatoravatar6 from 'assets/images/avatars/avatar6.svg'

const AppWrapper = styled.div`
    /* background-color: #0cdaf5; */
    
    .row {
        margin-left: -10px;
        margin-right: -10px;
    }
    /* .row-full {
        width: 100%;
    } */
    .row::after{
        content: '';
        clear: both;
        display: block;
    }
    .col {
        float: left;
        padding-left: 10px;
        padding-right: 10px;
    }
    .col-full {
        width: 100%;
    }
    .col-third {
        background-color: yellow;
        width: 33.33333%;
        /* width: calc(33.33333% - 20px); */
        width: 33.33333%;
    }
    .col-2-third {
        /* background-color: red; */
        /* width: calc(66.66666% - 20px); */
        width: 66.66666%;
    }
    .col-haft {
        width: 50%;
    }
    .card-wrapper {
        width: 372px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
    .mb-16{
        margin-bottom: 16px;
    }
    .mr-8{
        margin-right: 8px;
    }
    .mb-32{
        margin-bottom: 32px;
    }
    .position-relative {
        position: relative;
    }
    .float-right {
        float: right;
    }
    .discover{
        /* display: flex;
        align-items: center; */


        /* padding: 60px; */
        /* width: 716px; */
        /* height: 354px; */
        /* background: linear-gradient(75.33deg, rgba(0, 0, 0, 0.2) -10.41%, rgba(0, 0, 0, 0) 62.93%), url(${discoverImg}); */
        /* background: url(${discoverImg}); */

        position: absolute;
        /* top: 50%;
        transform: translateY(-50%); */

        /* top: 50%; */
        /* height: 100%; */
        /* bottom: 0px; */
        top: 0px;

        /* background: #5429FF; */
        border-radius: 12px;
        .title {
            font-weight: 700;
            font-size: 36px;
            line-height: 120%;
            /* or 65px */
            color: #fff;
            letter-spacing: -0.02em;
            margin-top :0px;
        }
        Button {
            font-weight: 700;
        }
        .demoCarousel{

            /* height: 100%;
            display: inline-block; */
            /* position: absolute;
            top: 50%;
            transform: translateY(-50%); */
        }
        .discover-create-btn{
            float: left;
            margin-left: 30px;
        }
    }

    .t1{
        background-color: red;
    }
    .t2{
        background-color: blue;
    }
    /* .bg1{
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    } */
    .auctions-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title-trending-auctions {
            font-weight: 700;
            font-size: 24px;
            line-height: 31px;
        }
    }

    .creator {
        padding: 24px;
        border-radius: 16px;
        background-color: #fff;
        .creator-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: -18px;
            .creator-title{
                font-weight: 700;
                font-size: 24px;
                line-height: 31px;
            }
            .creator-see-all{
                color: #747475;
            }
        }
        ol{
            padding-inline-start: 0px;
            counter-reset: li;
        }
        li {
            list-style-type: none;
            display: flex;
            align-items: center;
            margin-bottom: 8px;
        }
        li::before {
            content: counter(li);
            counter-increment: li;
        }
    }
`
const StyledCardAuction = styled.div`
    .auction-item{
        background-color: #fff;
        padding: 12px;
        border-radius: 16px;
        margin-bottom: 16px;
        .auction-item-img {
            position: relative;
            .auction-item-time {
                position: absolute;
                bottom: 28px;
                left: 8px;
            }
        }
        img {
            width: 100%;
        }
        .auction-item-info{
            display: flex; 
            justify-content: space-between;
            align-items: center;
            margin-bottom: -24px;
        }
        .auction-item-info-title {
            font-weight: 700;
            font-size: 24px;
            line-height: 31px;
        }
        .auction-item-info-like {
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;
            color: #747475;
        }
        .auction-item-author {
            display: flex;
            margin-bottom: -15px;
        }
        .auction-item-author-avatar {
            width: 28px;
            margin-right: 8px;
        }
        .auction-item-author-name {
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;
            color: #747475;
        }

        .auction-item-bid {
            display: flex;
            justify-content: space-between;
            .auction-item-eth-title {
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 21px;
                color: #747475;
            }
        }
    }    
`

const CardAuction = ({ aution1Img, time, itemTitle, like, avatar, authorName, eth }) => {
    return <StyledCardAuction>
        <div className="auction-item">
            <div className="auction-item-img">
                <img src={aution1Img} alt="" className='mb-16' />
                <div className="auction-item-time">
                    <TimeButton time={time} />
                </div>
            </div>

            <div className="auction-item-info">
                <p className="auction-item-info-title">{itemTitle}</p>
                <p className="auction-item-info-like">{like} Likes</p>
            </div>
            <div className="auction-item-author">
                <img className='auction-item-author-avatar' src={avatar} alt="" />
                <p className="auction-item-author-name">{authorName}</p>
            </div>
            <div className="auction-item-bid">
                <p className="auction-item-eth-title">Current Bid</p>
                <Eth amount={eth}></Eth>
            </div>
        </div>
    </StyledCardAuction>
}

const Slider = styled.div`
    /* position: relative; */
    /* .img {
        position: absolute;
    } */
`

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel
                // autoPlay
                infiniteLoop
                showStatus={false}
                // showIndicators={false}
                showThumbs={false}
                showArrows={false}
            >
                <Slider>
                    <div className="img">
                        <div className="" />
                        {/* <img src='http://react-responsive-carousel.js.org/assets/6.jpeg' alt="" /> */}
                        <img src={discoverImg} alt="" />
                        {/* <img src={slide1}/> */}
                    </div>

                    {/* <p className="title">Discover, Create and Sell Your Own NFT.</p>
                    <div className="discover-create-btn">
                        <Button className="mr-8" width='128px' height='46px'>Discover</Button>
                        <Button width='128px' height='46px' bgColor='transparent' textColor='#fff' boderColor='#fff'>Create</Button>
                    </div> */}

                </Slider>

                <Slider>
                    <div className="img">
                        <div className="" />
                    </div>

                    <p className="title">Discover, Create and Sell Your Own NFT.</p>
                    <div className="discover-create-btn">
                        <Button className="mr-8" width='128px' height='46px'>Discover</Button>
                        <Button width='128px' height='46px' bgColor='transparent' textColor='#fff' boderColor='#fff'>Create</Button>
                    </div>

                </Slider>

                {/* <div>
                    <img src='http://react-responsive-carousel.js.org/assets/6.jpeg' alt="" />
                </div> */}
            </Carousel>
        )
    }
}

export const Home = () => {
    return (
        <PrimaryLayout>
            <AppWrapper>
                {/* <Button percent={10}>8.1%</Button>
                <Button textColor="red" percent={-10}>3.2%</Button>
                <Button width="77px" height="32px" textColor="white" bgColor="#5429FF">Following</Button>
                <Button width="77px" height="32px" bgColor="rgba(84, 41, 255, 0.1)">Follow</Button>

                <div className='card-wrapper'>
                    <Card title="Revenue" amount="5.00" percent={12.3}></Card>
                    <Card title="Spending" amount="2.00" percent={8.1}></Card>
                    <Card title="ROI" content="+14.02" percent={-5.1}></Card>
                    <Card title="ROI" content="+14.02" percent={-5.1}></Card>
                </div> */}

                <div className="row mb-16 position-relative">
                    <div className="col col-2-third discover">
                        {/* <p className="title">Discover, Create and Sell Your Own NFT.</p>
                        <Button className="mr-8" width='128px' height='46px'>Discover</Button>
                        <Button width='128px' height='46px' bgColor='transparent' textColor='#fff' boderColor='#fff'>Create</Button> */}

                        <div className='demoCarousel'>
                            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                            <DemoCarousel />

                        </div>
                    </div>

                    <div className="col col-third float-right">
                        <div className="row mb-16">
                            <div className="col col-haft">
                                <Card title="Revenue" amount="5.00" percent={12.3}></Card>
                            </div>
                            <div className="col col-haft">
                                <Card title="Revenue" amount="5.00" percent={12.3}></Card>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col col-haft">
                                <Card title="Revenue" amount="5.00" percent={12.3}></Card>
                            </div>
                            <div className="col col-haft">
                                <Card title="Revenue" amount="5.00" percent={12.3}></Card>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col col-2-third">
                        <div className="row">
                            <div className="col col-full auctions-header">
                                <p className="title-trending-auctions">Trending Auctions</p>
                                <div className="lists-trending-auctions">
                                    <Button width='45px' height='28px' bgColor='#5429FF1A' fontSize='14px'>Art</Button>
                                    <Button width='64px' height='28px' bgColor='transparent' fontSize='14px' textColor='#7A797D'>Music</Button>
                                    <Button width='80px' height='28px' bgColor='transparent' fontSize='14px' textColor='#7A797D'>Collectibles</Button>
                                    <Button width='64px' height='28px' bgColor='transparent' fontSize='14px' textColor='#7A797D'>Utility</Button>
                                </div>
                            </div>
                        </div>

                        <div className="row list-auction">
                            <div className="col col-haft">
                                <CardAuction aution1Img={aution1Img} time='12 : 03 : 45' itemTitle='Ape In Love' like='21,5K' avatar={avatar1} authorName='@johnti60' eth='9.10' />
                            </div>
                            <div className="col col-haft">
                                <CardAuction aution1Img={aution2Img} time='08 : 21 : 23' itemTitle='Smilling Ape' like='21,5K' avatar={avatar2} authorName='@m_alisson' eth='6.12' />
                            </div>
                            <div className="col col-haft">
                                <CardAuction aution1Img={aution1Img} time='12 : 03 : 45' itemTitle='Ape In Love' like='21,5K' avatar={avatar1} authorName='@johnti60' eth='9.10' />
                            </div>
                            <div className="col col-haft">
                                <CardAuction aution1Img={aution2Img} time='08 : 21 : 23' itemTitle='Smilling Ape' like='21,5K' avatar={avatar2} authorName='@m_alisson' eth='6.12' />
                            </div>

                        </div>


                    </div>

                    <div className="col col-third creator">
                        <div className="creator-header">
                            <p className="creator-title">Top Creator</p>
                            <p className="creator-see-all">See All</p>
                        </div>

                        <ol>
                            <li><Creator name='Michael Jordan' id='@jordan_' avatar = {Creatoravatar1}/></li>
                            <li><Creator name='John Tibao' id='@johnti60' avatar={Creatoravatar2} follow={true}/></li>
                            <li><Creator name='Teressa' id='@teressa' avatar={Creatoravatar3} /></li>
                            <li><Creator name='Johan Hawn' id='@j_hawn' avatar={Creatoravatar4} follow={true} /></li>
                            <li><Creator name='Maria Alisson' id='@m_alisson' avatar={Creatoravatar5} /></li>
                            <li><Creator name='Sam Erricson' id='@erricsonsam' avatar={Creatoravatar6} /></li>
                        </ol>
                    </div>

                </div>

                <div className='row'>
                    <div className='col col-2-third t1'>
                        A
                    </div>
                    <div className='col col-third t2'>
                        B
                    </div>
                </div>
            </AppWrapper>
        </PrimaryLayout>
    );
}