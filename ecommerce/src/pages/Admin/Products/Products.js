import React, { useEffect, useState } from 'react'
import "./_products.scss"
import { db } from "../../../Config/ConfigFirebase"
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faClose, faMagnifyingGlass, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { MenAddProduct } from '../../../assets/components/Popup/MenAddProduct/MenAddProduct'
export const Products = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [categorySelect, setCategorySelect] = useState("Men");
  const handleCategory = (category) => {
    setCategoryOpen(false)
    setCategorySelect(category)
  }
  const [addEnable, setAddEnable] = useState(false);
  useState(() => {
    function handle(e) {
      if (e.target.className === "product-popup-parent") {
        setAddEnable(false)
      }
    }
    window.addEventListener("click", handle)
    return () => window.removeEventListener("click", handle)
  }, [])
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const messagesCollection = collection(db, 'men');
      const messagesSnapshot = await getDocs(messagesCollection);
      const messagesData = messagesSnapshot.docs.map(doc => doc.data());
      setMessages(messagesData);
    };

    fetchData();
  }, []);
  return (
    <div className='products-container'>
      <div className='category-search-container'>
        <div className='search'>
          <input type='text' placeholder='Search' />
          <div className='search-icon'>
            <FontAwesomeIcon icon={faMagnifyingGlass} color="gray" />
          </div>
        </div>
        <div className='add-category'>
          {
            categorySelect.length > 0 &&
            <div className='add-btn' onClick={() => { setAddEnable(true) }}>
              Add Products<FontAwesomeIcon icon={faPlusCircle} />
            </div>
          }
          <div className='category' onClick={() => { setCategoryOpen(!categoryOpen) }}>
            Select Category
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
      </div>
      {
        categoryOpen &&
        <div className='category-options'>
          <p className='options' onClick={() => { handleCategory("Men") }}>Men</p>
          <p className='options' onClick={() => { handleCategory("Women") }}>Women</p>
          <p className='options' onClick={() => { handleCategory("Electronics") }}>Electronics</p>
          <p className='options' onClick={() => { handleCategory("Mobile") }}>Mobile</p>
        </div>
      }
      {
        categorySelect === "Men" && <div>
          {
            messages?.map((product, index) =>
            (
              <p>{product.email}</p>
            )
            )
          }
        </div>
      }
      {
        categorySelect === "Women" && <div>u</div>
      }
      {
        categorySelect === "Electronics" && <div>e</div>
      }
      {
        categorySelect === "Mobile" && <div>m</div>
      }
      {
        addEnable &&
        <div className='product-popup-parent'>
          <div className='product-popup'>
            <div className='close-icon' onClick={() => { setAddEnable(false) }}>
              <FontAwesomeIcon icon={faClose} size='2xl' />
            </div>
            {
              categorySelect === "Men" &&
              <MenAddProduct />
            }
          </div>
        </div>
      }
    </div>
  )
}
