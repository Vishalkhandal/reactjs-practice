import React from 'react'
import Profile from '../Profile'
import FoodItem from '../FoodItem'

function MenuSection() {
    return (
        <>
            <section id='menu' style={{ backgroundColor: 'lightpink' }}>
                <h1>Menu Section</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', justifyContent: 'space-between' }}>
                    <div>          
                        <div style={{ display: "flex", flexDirection: 'column', alignItems: 'flex-start', }}>
                            <FoodItem
                                foodName="Bread Basket"
                                foodIngradients="Assortment of fresh baked fruit breads and muffins 5.50" />
                            <FoodItem
                                foodName="Honey Almond Granola with Fruits"
                                foodIngradients="Natural cereal of honey toasted oats, raisins, almonds and dates 7.00"
                            />
                            <FoodItem
                                foodName="Belgian Waffle"
                                foodIngradients="Vanilla flavored batter with malted flour 7.50"
                            />
                            <FoodItem
                                foodName="Scrambled eggs"
                                foodIngradients="Scrambled eggs, roasted red pepper and garlic, with green onions 7.50"
                            />
                        </div>
                    </div>
                    <Profile
                        src="https://plus.unsplash.com/premium_photo-1661265874417-f9a2f1981eda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Food Menu"
                        height="500px"
                        style={{objectFit: 'cover'}}
                    />
                </div>
            </section>
        </>
    )
}

export default MenuSection