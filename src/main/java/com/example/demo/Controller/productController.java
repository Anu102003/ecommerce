package com.example.demo.Controller;

import com.example.demo.DTO.ProductDTO;
import com.example.demo.Model.Product;
import com.example.demo.Model.Specifications;
import com.example.demo.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/")
public class productController {

    @Autowired
    private ProductService productService;
    @PostMapping("save/product")
    public ResponseEntity<Object> productDetails(@RequestBody ProductDTO product) {
        try {
            String result = productService.productSave(product);
            return new ResponseEntity<>(result, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to save product " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("search")
    public ResponseEntity<List<Product>> searchProductsByKeyword(@RequestParam String keyword) {
        List<Product> products = productService.searchProductsByKeyword(keyword);
        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }


//    @PostMapping("add/specification")
//    public String addSpecification(@RequestBody Specifications specifications){
//
//        return  productService.addSpecification(specifications);
//    }

    @GetMapping("display/products")
    public ResponseEntity<Object> viewProduct(){
        try {
            List<ProductDTO> productList= productService.displayProduct();
            return new ResponseEntity<>(productList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to display product" + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }

     @GetMapping("display/product/{id}")
    public ResponseEntity<Object> displayProduct(@PathVariable Integer id){
         try {
            ProductDTO productDTO= productService.displayProductBydId(id);
             return new ResponseEntity<>(productDTO, HttpStatus.OK);
         } catch (Exception e) {
             return new ResponseEntity<>("Failed to display product" + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
         }

     }

     @PutMapping("edit/product/{id}")
    public ResponseEntity<Object>editProduct(@PathVariable Integer id,@RequestBody ProductDTO product){
         try {
             String result= productService.editProduct(id,product);
             return new ResponseEntity<>(result, HttpStatus.OK);
         } catch (Exception e) {
             return new ResponseEntity<>("Failed to edit product" + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
         }
     }
     }
