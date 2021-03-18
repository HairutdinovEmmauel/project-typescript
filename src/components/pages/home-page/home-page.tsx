import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Content,
    WrapperSlider,
    Slider,
    ItemSlider,
    SliderActions,
    IconButton,
    SliderContent,
    TitleSlider,
    Typography,

    ListProduct,
    Product,
    ProductMedia,
    ProductContent,
    ProductName,
    ProductPrise,
} from './styled-components-home-page';

// icons svg
import {
    ArrowLeft,
    ArrowRight,
} from '../../../svg';

const HomePage: React.FC = () => {

    const [ slider, setPositionSllider ] = useState({
        visibilityWindow: 1,
        right: 0
    });

    const data = [
        {
            _id: 1,
            url: 'https://media.istockphoto.com/vectors/open-box-line-icon-e-commerce-and-marketing-goods-sign-vector-a-on-vector-id925909042',
            name: 'NAME',
            prise: 0,
        },
        {
            _id: 2,
            url: 'https://media.istockphoto.com/vectors/open-box-line-icon-e-commerce-and-marketing-goods-sign-vector-a-on-vector-id925909042',
            name: 'NAME',
            prise: 0,
        },
        {
            _id: 3,
            url: 'https://media.istockphoto.com/vectors/open-box-line-icon-e-commerce-and-marketing-goods-sign-vector-a-on-vector-id925909042',
            name: 'NAME',
            prise: 0,
        },
        {
            _id: 4,
            url: 'https://media.istockphoto.com/vectors/open-box-line-icon-e-commerce-and-marketing-goods-sign-vector-a-on-vector-id925909042',
            name: 'NAME',
            prise: 0,
        },
        {
            _id: 5,
            url: 'https://media.istockphoto.com/vectors/open-box-line-icon-e-commerce-and-marketing-goods-sign-vector-a-on-vector-id925909042',
            name: 'NAME',
            prise: 0,
        },
        {
            _id: 6,
            url: 'https://media.istockphoto.com/vectors/open-box-line-icon-e-commerce-and-marketing-goods-sign-vector-a-on-vector-id925909042',
            name: 'NAME',
            prise: 0,
        },
        {
            _id: 7,
            url: 'https://media.istockphoto.com/vectors/open-box-line-icon-e-commerce-and-marketing-goods-sign-vector-a-on-vector-id925909042',
            name: 'NAME',
            prise: 0,
        },
        {
            _id: 8,
            url: 'https://media.istockphoto.com/vectors/open-box-line-icon-e-commerce-and-marketing-goods-sign-vector-a-on-vector-id925909042',
            name: 'NAME',
            prise: 0,
        },
        {
            _id: 9,
            url: 'https://media.istockphoto.com/vectors/open-box-line-icon-e-commerce-and-marketing-goods-sign-vector-a-on-vector-id925909042',
            name: 'NAME',
            prise: 0,
        },
        {
            _id: 10,
            url: 'https://media.istockphoto.com/vectors/open-box-line-icon-e-commerce-and-marketing-goods-sign-vector-a-on-vector-id925909042',
            name: 'NAME',
            prise: 0,
        },
        {
            _id: 11,
            url: 'https://media.istockphoto.com/vectors/open-box-line-icon-e-commerce-and-marketing-goods-sign-vector-a-on-vector-id925909042',
            name: 'NAME',
            prise: 0,
        },
        {
            _id: 12,
            url: 'https://media.istockphoto.com/vectors/open-box-line-icon-e-commerce-and-marketing-goods-sign-vector-a-on-vector-id925909042',
            name: 'NAME',
            prise: 0,
        },
        {
            _id: 13,
            url: 'https://media.istockphoto.com/vectors/open-box-line-icon-e-commerce-and-marketing-goods-sign-vector-a-on-vector-id925909042',
            name: 'NAME',
            prise: 0,
        },
        {
            _id: 14,
            url: 'https://media.istockphoto.com/vectors/open-box-line-icon-e-commerce-and-marketing-goods-sign-vector-a-on-vector-id925909042',
            name: 'NAME',
            prise: 0,
        },
        {
            _id: 15,
            url: 'https://media.istockphoto.com/vectors/open-box-line-icon-e-commerce-and-marketing-goods-sign-vector-a-on-vector-id925909042',
            name: 'NAME',
            prise: 0,
        },
    ]

    const sliderData = [
        {
            _id: 1,
            ImgUrl: 'https://shapedplugin.com/wp-content/uploads/2019/12/How-to-create-WooCommerce-Product-Slider-800x400.jpg',
            title: 'Title Slider',
            typography: 'Text Slider',
            link: '/',
        },
        {
            _id: 2,
            ImgUrl: 'https://images.spot.im/v1/production/arxydvgna3vvgsgilpvv',
            title: 'Title Slider',
            typography: 'Text Slider',
            link: '/',
        },
        {
            _id: 3,
            ImgUrl: 'https://images.idgesg.net/images/article/2019/11/vizio_product_red_m-series_quantum_4k-tv_main-2-100816600-large.3x2.jpg',
            title: 'Title Slider',
            typography: 'Text Slider',
            link: '/',
        },
    ];

    const shiftsPositionItemsSliderLeft = () => {

        const position = slider.right + 1000;

        const lengthItemsSlider: number = sliderData.length;

        if(slider.visibilityWindow === lengthItemsSlider ) {

            setPositionSllider({ 
                visibilityWindow: slider.visibilityWindow,
                right: slider.right 
            });

            return;
        }

        setPositionSllider({ 
            visibilityWindow: slider.visibilityWindow + 1, 
            right: position,
        });
    }

    const shiftsPositionItemsSliderRight = () => {

        const position = slider.right - 1000;

        if(slider.visibilityWindow === 1 ) {

            setPositionSllider({ 
                visibilityWindow: slider.visibilityWindow,
                right: slider.right 
            });

            return;
        }

        setPositionSllider({ 
            visibilityWindow: slider.visibilityWindow - 1, 
            right: position,
        });
    }

    return (
        <Content>
            <WrapperSlider>
                <Slider>
                    { sliderData.map(({ _id, ImgUrl, title, typography, link }) => {
                        return (
                            <div key={_id}>
                                <ItemSlider style={ { backgroundImage: `url(${ImgUrl})`, right: `${slider.right}px` } } >
                                    <SliderActions>
                                        <IconButton onClick={shiftsPositionItemsSliderRight} >
                                            <ArrowLeft />
                                        </IconButton>
                                    </SliderActions>
                                    <Link to={link} style={ { width: '100%', flexGrow: 1 } } >
                                        <SliderContent>
                                            <TitleSlider>{ title }</TitleSlider>
                                            <Typography>
                                                { typography }
                                            </Typography>
                                        </SliderContent>
                                    </Link>
                                    <SliderActions>
                                        <IconButton onClick={shiftsPositionItemsSliderLeft} >
                                            <ArrowRight />
                                        </IconButton>
                                    </SliderActions>
                                </ItemSlider>
                            </div>
                        );
                    }) }
                </Slider>
            </WrapperSlider>
            
            <ListProduct>
                { data.map(({ _id, url, name, prise }) => {
                    return (
                        <Product key={_id} >
                            <ProductMedia src={url} alt='rfnhbyrf' />
                            <ProductContent >
                                <ProductName>
                                    { name }
                                </ProductName>
                                <ProductPrise>
                                    { prise }
                                </ProductPrise>
                            </ProductContent>
                        </Product>
                    )
                }) }
                
            </ListProduct>
        </Content>
    )
};

export default HomePage;