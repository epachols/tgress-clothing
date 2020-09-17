// import React, {useState} from 'react'
import SHOP_DATA from "./shop.data.js"

// export default function ShopComponent(props) {

//     const [collections, setCollections] = useState(SHOP_DATA)

//     return (
//         <div>
            
//         </div>
//     )
// }

import React, { Component } from 'react'
import CollectionPreview from "../../components/collection-preview/collection-preview.component";


export default class ShopPage extends Component {
    constructor(props) {
    super(props);
    this.state = {
        collections: SHOP_DATA 
    }
    }
    render() {
        const [...collections] = this.state.collections
        return (
            <div className='shop-page'>
               {collections.map(({ id, ...otherCollectionProps }) => (

                   <CollectionPreview key={id} {...otherCollectionProps} />
               )
               )}
               
            </div>
        )
    }
}

