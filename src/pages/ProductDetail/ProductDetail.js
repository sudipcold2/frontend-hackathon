import React, {  Component } from 'react';
import {connect} from 'react-redux';
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import {fetchSingleBook} from "../../actions";
import ProductDetailComponent from '../../components/ProductDetail/ProductDetail';

class ProductDetail extends Component {

    constructor(props){
        super(props);
        //props.match.params.id
        this.state = {
            id : this.props.match.params.id
        }
        this.props.fetchSingleBook(this.state.id);
    }

    render(){
        return (
            <div className="container" style={{padding: '6rem 0'}}>
                <div className="card">
                    <div className="row">
                        <ProductSlider images={this.props.product.images}/>
                        <ProductDetailComponent product={this.props.product}/>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        //console.log(this.state.id);
        this.props.fetchSingleBook(this.state.id);
    }
}

const mapStateToProps = state =>  {

    const product = state.singleBook[0];
    
    //const book = state.singleBook.find();
    return { product }
};



export default connect(mapStateToProps, {fetchSingleBook: fetchSingleBook})(ProductDetail);

