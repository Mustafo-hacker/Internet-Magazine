import { create } from "zustand";
import axios from 'axios';
import axiosRequest from "../axiosRequests/axiosRequest";


export const useStore = create((set, get) => ({
    data: [],
    total: "",
    getProducts: async () => {
        try {
            let { data } = await axiosRequest.get("https://store-api.softclub.tj/Product/get-products");
            set({ data: data.data.products });
            // console.log({data:data.data});

        } catch (error) {
            console.log(error);
        }
    },
    getCategory: async () => {
        try {
            let { dataCateg } = await axios.get("https://store-api.softclub.tj/Category/get-categories");
            set({ categories: dataCateg.data });
            console.log({ data: dataCateg.data });

        } catch (error) {
            console.log(error);
        }
    },
    addToCart: async (id) => {
        try {
            await axiosRequest.post(`https://store-api.softclub.tj/Cart/add-product-to-cart?id=${id}`)
            console.log('Product added to cart')
        } catch (error) {
            console.log(error)
        }
    },
    getCart: async () => {
        try {
            let { data } = await axiosRequest.get('https://store-api.softclub.tj/Cart/get-products-from-cart')
            set({ data: data.data[0].productsInCart });
            set({ total: data.data[0].totalDiscountPrice });
            // console.log({data:data.data});

        } catch (error) {
            console.log(error);
        }
    },
    deleteCart: async (id) => {
        try {
            await axiosRequest.delete(`/Cart/delete-product-from-cart?id=${id}`)
            console.log('deleted')
            let { data } = await axiosRequest.get('https://store-api.softclub.tj/Cart/get-products-from-cart')
            set({ data: data.data[0].productsInCart });
        } catch (error) {
            console.log(error)
        }
    },
    clearCart: async () => {
        try {
            await axiosRequest.delete(`/Cart/clear-cart`)
            set({ data: [] });
            console.log('clear')
        } catch (error) {
            console.error(error);
        }
    },

    decrementfunc: async (id) => {
        try {
            await axiosRequest.put(`/Cart/reduce-product-in-cart?id=${id}`);
            get().getCart();
            // set( {data:data.data.products} );
        } catch (error) {
            console.error(error);
        }
    },
    incrimentfunc: async (id) => {
        try {
            await axiosRequest.put(`/Cart/increase-product-in-cart?id=${id}`);
            get().getCart();

            // set( {data:data.data.products} )
        } catch (error) {
            console.error(error);
        }
    },
    getProductById: async (id) => {
        try {
            let { data } = await axiosRequest.get(
                `/Product/get-product-by-id?id=${id}`
            );
            set({ data: data.data });
        } catch (error) {
            console.log(error);
        }
    },

}))
