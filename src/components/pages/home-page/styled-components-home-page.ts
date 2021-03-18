import styled from 'styled-components';

const Content = styled.section`
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const WrapperSlider = styled.div`
    max-width: 1170px;
    display: flex;
    justify-content: center;
`;

const Slider = styled.div`
    width: 1000px;
    display: flex;
    margin-bottom: 10px;
    overflow: hidden;
`;

const ItemSlider = styled.div`
    position: relative; 
    width: 1000px;
    height: 100%;
    display: block;
    display: flex;
    height: 400px;  
    background-size: cover;
    background-repeat: no-repeat;
`;
const SliderActions= styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const IconButton = styled.div`
    width: 30px;
    cursor: pointer;
`;

const SliderContent = styled.div`
    flex-grow: 1;
`;

const TitleSlider = styled.h3`
    
`;

const Typography = styled.div`
    display: block;
    text-align: center;
`;

const ListProduct = styled.div`
    max-width: 1170px;
    display: flex;
    flex-wrap: wrap;
`;

const Product = styled.div`
    max-width: 280px;
    border-right: 1px solid #b7d4ec;
    border-bottom: 1px solid #b7d4ec;
    flex: 1 1 200px;
`;

const ProductMedia = styled.img`
    width: 100%;
`;

const ProductContent = styled.div`
    width: 100%;
`; 

const ProductName = styled.h5`
    margin: 0;
    padding: 5px; 
    padding-top: 10px; 
    color: #065da7;
`;

const ProductPrise = styled.p`
    margin: 0;
    padding: 5px; 
    padding-top: 10px; 
    color: #065da7;
`;

export {
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

};