import React from 'react';
import {connect} from 'react-redux';
import {formatMoney} from "../../pipes/priceFormatter";
import {addProductToCart} from "../../actions";

const ProductDetail = (props) => {

    const {
        title,
        price,
        bookID,
        authors,
        average_rating,
        isbn,
        ratings_count,
        language_code,
    } = props.product;

    const onCart = () => {
        props.dispatch(addProductToCart(props.product));
    };

    return (
        <aside className="col-sm-7">
            <article className="card-body p-5">
                <h3 className="title mb-3">{title}</h3>

                <p className="price-detail-wrap">
                    <span className="price h3 text-warning">
                        <span className="currency">$</span><span className="num">{formatMoney(price)}</span>
                    </span>
                </p>
                <dl className="item-property">
                    <dt>Authors</dt>
                    <dd><p className="text-capitalize">{authors}</p></dd>
                </dl>
                <dl className="param param-feature">
                    <dt>ISBN</dt>
                    <dd className="text-capitalize">{isbn}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Average Rating</dt>
                    <dd>{average_rating}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Ratings Count</dt>
                    <dd>{ratings_count}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Language</dt>
                    <dd>{language_code}</dd>
                </dl>
                <hr/>
                <hr/>
                <button
                    onClick={onCart}
                    className="btn btn-lg btn-outline-primary text-uppercase"><i
                    className="fa fa-shopping-cart"/> Add to cart
                </button>
            </article>
        </aside>
    );
};

export default connect()(ProductDetail);
