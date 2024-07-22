import { useState } from 'react';
import img1 from '../assets/airpodes/img1.webp'
import img2 from '../assets/airpodes/img2.webp'
import img3 from '../assets/airpodes/img3.webp'
import img4 from '../assets/airpodes/img4.webp'
import img5 from '../assets/airpodes/img5.webp'

import img6 from '../assets/camera/img1.jpg'
import img7 from '../assets/camera/img2.jpg'
import img8 from '../assets/camera/img3.jpg'
import img9 from '../assets/camera/img4.jpg'
import img10 from '../assets/camera/img5.jpg'

import img11 from '../assets/mobiles/img1.webp'
import img12 from '../assets/mobiles/img2.webp'
import img13 from '../assets/mobiles/img3.webp'
import img14 from '../assets/mobiles/img4.webp'
import img15 from '../assets/mobiles/img5.webp'

import img16 from '../assets/watches/img1.webp'
import img17 from '../assets/watches/img2.webp'
import img18 from '../assets/watches/img3.webp'
import img19 from '../assets/watches/img4.webp'
import img20 from '../assets/watches/img5.webp'


const ProductManagement = () => {
    const [products] = useState({
        airpods: [
            { id: 1, name: 'AirPods 1', image: img1 },
            { id: 2, name: 'AirPods 2', image: img2 },
            { id: 3, name: 'AirPods Pro', image: img3 },
            { id: 4, name: 'AirPods Max', image: img4 },
            { id: 5, name: 'AirPods 3', image: img5 },
        ],
        cameras: [
            { id: 1, name: 'Canon EOS', image: img6 },
            { id: 2, name: 'Nikon D3500', image: img7 },
            { id: 3, name: 'Sony Alpha', image: img8 },
            { id: 4, name: 'Fujifilm X-T4', image: img9 },
            { id: 5, name: 'Panasonic Lumix', image: img10 },
        ],
        watches: [
            { id: 1, name: 'Boat Pro 1', image: img16 },
            { id: 2, name: 'Boat Pro 2', image: img17 },
            { id: 3, name: 'Boat Pro 3', image: img18 },
            { id: 4, name: 'Boat Pro 4', image: img19 },
            { id: 5, name: 'Boat Pro 5', image: img20 },
        ],
        mobiles: [
            { id: 1, name: 'realme 9i 5g', image: img11 },
            { id: 2, name: 'realme C30', image: img12 },
            { id: 3, name: 'Samsung Galaxy S14', image: img13 },
            { id: 4, name: 'Samsung Galaxy C53', image: img14 },
            { id: 5, name: 'Samsung Galaxy Z Flip3 5G', image: img15 },
        ],
    });

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Product Management</h2>

            <div className="flex justify-end mb-5">
                <button className='bg-green-600 rounded text-white hover:bg-green-700 px-3 py-1.5 md:px-4 md:py-2 text-lg'>
                    + Add Product
                </button>
            </div>


            <div className="space-y-8">
                {Object.keys(products).map((category) => (
                    <div key={category} className="bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-semibold mb-2 capitalize">
                            {category}: ({products[category].length} products)
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {products[category].map((product) => (
                                <div key={product.id} className="border rounded p-2 text-center">
                                    <img src={product.image} alt={product.name} className="w-full h-32 object-contain mb-2" />
                                    <h4 className="text-lg font-semibold">{product.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductManagement;
