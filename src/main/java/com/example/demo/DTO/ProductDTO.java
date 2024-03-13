package com.example.demo.DTO;

import lombok.Data;

import java.util.Map;

@Data
public class ProductDTO {

  private   String product_name;
  private   String description;

  private    Integer price;
  private   String categoryName;
  private   Integer quantity;
  private String location;
  private String thumbnail;
  private String brand;

   private  String modelNo;
    private String color;
    private Integer weight;
    private String modelName;
    private Map<String ,String> images;
    private Map<String ,String> specifications;


}
