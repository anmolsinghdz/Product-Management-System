package com.anmol.service;

import com.anmol.model.Product;
import com.anmol.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Integer id) {
        return productRepository.findById(id).get();
    }

    @Override
    public String deleteProduct(Integer id) {
        Product product = productRepository.findById(id).get();
        if(product != null){
            productRepository.delete(product);
            return "Product deleted successfully";
        }
        return "Product not found";
    }

    @Override
    public Product editProduct(Product product, Integer id) {
        Product oldProduct = productRepository.findById(id).get();
        oldProduct.setProductName(product.getProductName());
        oldProduct.setDescription(product.getDescription());
        oldProduct.setPrice(product.getPrice());
        oldProduct.setStatus(product.getStatus());
        return productRepository.save(oldProduct);
    }
}
