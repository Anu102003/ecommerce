import React, { useContext, useEffect, useState } from 'react'
import "./listAllProducts.scss"
import { SideFilter } from '../../../assets/components/SideFilter/SideFilter'
import Card from '../../../assets/components/Card/Card'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../../Config/ConfigFirebase'
import { useLocation } from 'react-router-dom'
import Menu from '../../../Context/LocaleContext'


const data = [
  {
    "ASIN": "B0CFDX9Q83",
    "brand": "IndoPrimo",
    "category": "Shirt",
    "collarStyle": "Button Down",
    "colour": "Green",
    "country": "India",
    "dateFirstAvailable": "11 August 2023",
    "description": "Soft Touch Cotton Fabrics: Good capability of tenderness, air permeability and moisture absorption feels soft and comfy \\m\nClosure :- Button , Sleeve Type :- Full Sleeve , Occasion :- Casual \\n\nRegular Fit , Fabric: Soft Touch Cotton , Full Sleeve ,Casual Shirts \\n\nHigh Qluality Fabric And Stitching Show As Same Of Images Products \\n\nAbout the Brand IndoPrimo : Finding Basic Menswear for daily use can be hard among today’s Fast fashion world, where trends change daily. That’s why we started IndoPrimo to create a one stop shop for premium essential clothing for everyday use at lowest prices IndoPrimo Have Own manufacturing Unit And Bigger Professional Cutting Person And Making Person And Send Shirt After All QC.",
    "fitType": "Regular Fit",
    "id": "zP1dkqq99WxhJ7Jk7DlP",
    "images": [
      { "url": "https://m.media-amazon.com/images/I/613XTwL+lhL._SY741_.jpg" },
      { "url": "https://m.media-amazon.com/images/I/61-FH4CRVdL._SY741_.jpg" },
      { "url": "https://m.media-amazon.com/images/I/61qrg7INNpL._SY741_.jpg" }
    ],
    "importer": " IndoPrimo, India",
    "itemDimensions": "25 x 23 x 3 cm",
    "length": "Standard Length",
    "manufacturer": "IndoPrimo",
    "material": "Premium Cotton fabric",
    "modelName": "Saif",
    "modelNo": "",
    "packer": " IndoPrimo",
    "pattern": "Checkered",
    "price": {
      "discount": 0,
      "normalPrice": "1495"
    },
    "productId": "1",
    "review": [],
    "size": "S",
    "sleeveType": "Long Sleeve",
    "thumbnail": "https://m.media-amazon.com/images/I/618LbDYIVRL._SY741_.jpg",
    "title": "IndoPrimo Men's Cotton Casual Regular Fit Green Checks Shirt for Men Full Sleeves - Harley",
    "weight": "350 g"
  },
  {
    "ASIN": "B0B51712RR",
    "brand": "KETCH",
    "category": "Shirt",
    "collarStyle": "Cutaway",
    "colour": "Blue",
    "country": "India",
    "dateFirstAvailable": "24 June 2022",
    "description": "CHECKS WHITE/BEIGE Shirt",
    "fitType": "Straight Fit",
    "id": "22DzPqaT1rIBN0KZGKgK",
    "images": [
      { "url": "https://m.media-amazon.com/images/I/91xehvxKLWL._SY741_.jpg" },
      { "url": "https://m.media-amazon.com/images/I/91IrxS6qMaL._SY741_.jpg" },
      { "url": "https://m.media-amazon.com/images/I/91SsvtXp+QL._SY741_.jpg" },
      { "url": "https://m.media-amazon.com/images/I/91pIdZtgZaL._SY741_.jpg" }
    ],
    "importer": "Brand Studio Lifestyle Pvt Ltd. 113, Krishna reddy Ind Area, 7th Mile, Kudlu Gate, Hosur Road, Bangalore 560068",
    "itemDimensions": "35.6 x 30.5 x 2 Centimeters",
    "length": "Standard Length",
    "manufacturer": "Brand Studio Lifestyle Pvt Ltd., Brand Studio Lifestyle Pvt Ltd. 113, Krishna reddy Ind Area, 7th Mile, Kudlu Gate, Hosur Road, Bangalore 560068",
    "material": "50% COTTON 50% POLY",
    "modelName": "",
    "modelNo": "KHSH000333",
    "packer": "Brand Studio Lifestyle Pvt Ltd. 113, Krishna reddy Ind Area, 7th Mile, Kudlu Gate, Hosur Road, Bangalore 560068",
    "pattern": "Letter Print",
    "price": {
      "discount": "56",
      "normalPrice": "899"
    },
    "productId": "2",
    "review": [
      {
        "title": "",
        "description": "Very Nice",
        "ratingCount": 4,
        "date": " 2023-11-04T09:10:33.000Z",
        "username": "Anu"
      }
    ],
    "size": "L",
    "sleeveType": "Long Sleeve",
    "thumbnail": "https://m.media-amazon.com/images/I/91cAPJCQG8L._SY741_.jpg",
    "title": "KETCH Men Shirt",
    "weight": "280 g"
  },
  {
    "ASIN": "B0BYYZ6GVN",
    "brand": "Leriya Fashion",
    "category": "Shirt",
    "collarStyle": "Spread Collar, Button Down",
    "colour": "Green",
    "country": "India",
    "dateFirstAvailable": "20 March 2023",
    "description": "Fabric:- Rayon || Color:- Multi Colored || Pattern:- Stylish Tropical Leaf Print || Sleeves:- Short Sleeve || Fit Type:- Regular \\n\nPackage Content:- 1 Shirt For Men || Type: Stylish Printed Shirts || Shirt Length :- Curved Hem Line || Neck:- Spread Collar Design \\n\nSize:- Our Shirts Have XS, S, M, L, XL, And XXL Sizes Available. Select as Per Your Requirement \\n\nOcassion:- Beach wear, Casual Wear, Party Wear, Date Wear, Evening wear, Travelling Wear, Office Wear, Collage Wear, Day & Night Wear, summer shirts for men \\n\nPlease check the Size Chart for the Garments Measurements and Order a Garment for the Ease of Putting on and Taking Off the Garment. \\n\nSlight Color Variation May Occur Due to Photographic Reasons. Please Click On Brand Name 'Leriya Fashion' for More Products.",
    "fitType": "Relaxed Fit",
    "id": "v59oGl96E2AbmeRi1bH5",
    "images": [
      { "url": "https://m.media-amazon.com/images/I/51JLoMPF8uL._SY741_.jpg" },
      { "url": "https://m.media-amazon.com/images/I/518dhXvFmtL._SY741_.jpg" },
      { "url": "https://m.media-amazon.com/images/I/61dO22RUTbL._SY741_.jpg" },
      { "url": "https://m.media-amazon.com/images/I/5119+68Z77L._SY741_.jpg" }
    ],
    "importer": "Leriya Fashion-Surat",
    "itemDimensions": "30 x 10 x 3 Centimeters",
    "length": "Standard Length",
    "manufacturer": "Leriya Fashion, Leriya Fashion-Surat",
    "material": "Rayon",
    "modelName": "Cool Shirts For Men",
    "modelNo": "LF-MS-6046",
    "packer": "Leriya Fashion-Surat",
    "pattern": "floral",
    "price": {
      "discount": "55",
      "normalPrice": "699"
    },
    "productId": "3",
    "review": [],
    "size": "L",
    "sleeveType": "Short Sleeve",
    "thumbnail": "https://m.media-amazon.com/images/I/71NFx7yDSvL._SX569_.jpg",
    "title": "Leriya Fashion Shirt for Men | Tropical Leaf Printed Rayon Shirts for Men | Preppy Short Sleeves | Spread Collared Neck | Perfect for Outing | Beach | Camp Wear Shirt for Boys",
    "weight": "300 g"
  },
  {
    "ASIN": "B0CTQFD615",
    "brand": "Lymio Store",
    "careInstruction": "Machine Wash",
    "category": "Pant",
    "closureType": "Drawstring",
    "collarStyle": "",
    "colour": "Green",
    "country": "india",
    "dateFirstAvailable": "1 February 2024",
    "description": "Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men \\n\nType:Cargo Pants \\n\nClosure Type:Drawstring Waist \\n\nLength:Long \\n\nFit Type:Loose",
    "fitType": "Loose",
    "id": "6kdvzjx1F4vOc6wNguRy",
    "images": [
      { "url": "https://m.media-amazon.com/images/I/71WrtfRLinL._SY741_.jpg" },
      { "url": "https://m.media-amazon.com/images/I/71gfAD85SRL._SY741_.jpg" },
      { "url": "https://m.media-amazon.com/images/I/713Uc2E2RxL._SY741_.jpg" }
    ],
    "importer": "J B Fashion_Surat-395004",
    "itemDimensions": "10 x 2 x 11 Centimeters",
    "length": "Long Length",
    "manufacturer": "J B Fashion, J B fashion_Surat-395004",
    "material": "Cotton",
    "modelName": "Cargo Pant",
    "modelNo": "Cargo-06-Olivegreen-L",
    "occasionType": "",
    "packer": "J B Fashion_Surat-395004",
    "pattern": "printed",
    "price": {
      "discount": "26",
      "normalPrice": "700"
    },
    "productId": "4",
    "review": [],
    "size": "L",
    "sleeveType": "",
    "style": "Cargo",
    "thumbnail": "https://m.media-amazon.com/images/I/61HPVuqzGjL._SY741_.jpg",
    "title": "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-05-08)",
    "weight": "399 g"
  }
]


export const ListAllProducts
 = () => {

  const [details, setDetails] = useState();

  const navMenuSelected = useContext(Menu);

  const getUniqueValues = (key) => {
    const uniqueValuesSet = new Set();
    return details
      ?.filter(item => {
        if (!uniqueValuesSet.has(item[key])) {
          uniqueValuesSet.add(item[key]);
          return true;
        }
        return false;
      })
      .map(item => ({
        title: item[key],
        value: item[key],
        name: item[key],
        ...(key === 'colour' && { color: item[key] }),
      }));
  };

  const categoryArray = getUniqueValues('category');
  const brandArray = getUniqueValues('brand');
  const colorArray = getUniqueValues('colour');
  const sizeArray = getUniqueValues('size')
  const patternArray = getUniqueValues('pattern');
  const materialArray = getUniqueValues('material');
  const sleeveTypeArray = getUniqueValues('sleeveType')

  const initialFilters = {
    price: null,
    brand: [],
    color: [],
    category: [],
    size: [],
    pattern: [],
    material: [],
    sleeveType: [],
    discount: null,
  };

  const [filters, setFilters] = useState(initialFilters);
  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => {
      const updatedFilters = { ...prevFilters };

      if (filterType === 'Price') {
        updatedFilters.price = value;
      } else if (filterType === 'Discount') {
        updatedFilters.discount = value;
      } else {
        updatedFilters[filterType.toLowerCase()] = prevFilters[filterType.toLowerCase()].includes(value)
          ? prevFilters[filterType.toLowerCase()].filter(option => option !== value)
          : [...prevFilters[filterType.toLowerCase()], value];
      }

      return updatedFilters;
    });
  };

  function filteredData(details, filters) {
    return details?.filter(item => {
      return (
        (filters.category.length === 0 || filters.category.includes("") || filters.category.includes(item.category)) &&
        (filters.size.length === 0 || filters.size.includes("") || filters.size.includes(item.size)) &&
        (filters.brand.length === 0 || filters.brand.includes("") || filters.brand.includes(item.brand)) &&
        (filters.pattern.length === 0 || filters.pattern.includes("") || filters.pattern.includes(item.pattern)) &&
        (filters.material.length === 0 || filters.material.includes("") || filters.material.includes(item.material)) &&
        (filters.sleeveType.length === 0 || filters.sleeveType.includes("") || filters.sleeveType.includes(item.sleeveType)) &&
        (filters.color.length === 0 || filters.color.includes("") || filters.color.includes(item.colour)) &&
        (!filters.price ||
          (filters.price === "500" && parseInt(item.price?.normalPrice) < 500) ||
          (filters.price === "1000" && parseInt(item.price?.normalPrice) >= 500 && parseInt(item.price?.normalPrice) <= 1000) ||
          (filters.price === "1500" && parseInt(item.price?.normalPrice) >= 1000 && parseInt(item.price?.normalPrice) <= 1500) ||
          (filters.price === "2000" && parseInt(item.price?.normalPrice) > 1500))
        &&
        (!filters.discount ||
          (filters.discount === "10" && parseInt(item.price?.discount) < 20) ||
          (filters.discount === "20" && parseInt(item.price?.discount) >= 20 && parseInt(item.price?.discount) < 35) ||
          (filters.discount === "35" && parseInt(item.price?.discount) >= 35 && parseInt(item.price?.discount) < 50) ||
          (filters.discount === "50" && parseInt(item.price?.discount) >= 50 && parseInt(item.price?.discount) < 60) ||
          (filters.discount === "60" && parseInt(item.price?.discount) >= 60 && parseInt(item.price?.discount) < 70) ||
          (filters.discount === "70" && parseInt(item.price?.discount) >= 70))
      );
    });
  }

  const result = filteredData(details, filters);


  useEffect(() => {
    if (navMenuSelected !== "Home") {
      const fetchData = async () => {
        try {
          const messagesCollection = collection(db, `${navMenuSelected.toLowerCase()}`);
          const q = query(messagesCollection, orderBy('productId', 'asc'));
          const messagesSnapshot = await getDocs(q);
          const messagesData = messagesSnapshot.docs.map(doc => (
            {
              id: doc.id,
              ...doc.data()
            }
          ));
          setDetails(messagesData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [navMenuSelected]);
  // console.log(details)
  return (
    <div className='men-container'>
      <div className='sidefilter-wrapper'>
        <SideFilter menu={navMenuSelected} patternArray={patternArray} materialArray={materialArray} sleeveTypeArray={sleeveTypeArray} sizeArray={sizeArray} categoryArray={categoryArray} colorArray={colorArray} brandArray={brandArray}
          handleFilterChange={handleFilterChange} />
      </div>
      <div className='products-wrapper'>
        {result?.map((product) => (
          <Card key={product.ASIN} product={product} />
        ))}
      </div>
    </div>
  )
}


























