import axios from 'axios';


const API_URL="http://localhost:8080/products";




class ProductService{

    saveProduct(product){
        return axios.post(API_URL+"/add",product);
    }

    editProduct(product){
        return axios.put(API_URL+"/editProduct/",product);
    }

    getAllProduct(product){
        return axios.get(API_URL+"/view");
    }

    
    getProductByUser(id){
        return axios.get(API_URL+"/"+id);
    }

    deleteProduct(id){
        return axios.delete(API_URL+"/delete/"+id);
    }

    getProductById(id){
        return axios.get(API_URL+"/"+id);
    }

}

export default new ProductService