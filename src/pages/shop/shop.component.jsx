import React, { Component } from 'react'
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';



export default class Shop extends Component {
    constructor(props){
        super(props);
this.state={
    collection:SHOP_DATA
}
    }
    
    
    render() {
        return (
            <div>
            {
                this.state.collection.map((data,index)=>{
                    return <CollectionPreview  key={index} {...data} />
                })
            }
            </div>
        )
    }
}
