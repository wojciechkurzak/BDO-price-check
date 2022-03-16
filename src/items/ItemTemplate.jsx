import React from 'react'
import './ItemTemplate.scss'

const ItemTemplate = ({item}) => {
    const name = item[16]
    const minBase = item[7]
    const maxBase = item[6]
    const stock = Math.floor(Math.random() * 100)

    return (
        <div className='itemContainer'>
            <div className='item name'>
                <p>{name}</p>
            </div>
            <div className='item minBase'>
                <p>{minBase}</p>
            </div>
            <div className='item maxBase'>
                <p>{maxBase}</p>
            </div>
            <div className='item stock'>
                <p>{stock}</p>
            </div>
        </div>
    )
}

export default ItemTemplate