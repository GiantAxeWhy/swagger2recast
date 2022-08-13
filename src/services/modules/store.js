import { request } from '@utils/request';


  

/**
  * Place an order for a pet
  * @param {} body - order placed for purchasing the pet    
  */
      
export const order = (params) => request.post('/store/order', params);

  

/**
  * Find purchase order by ID
  * @param {integer} orderId - ID of pet that needs to be fetched    
  */
      
export const {orderId} = (params) => request.get('/store/order/{orderId}', params);

  

/**
  * Delete purchase order by ID
  * @param {integer} orderId - ID of the order that needs to be deleted    
  */
      
export const {orderId} = (params) => request.delete('/store/order/{orderId}', params);

  

/**
  * Returns pet inventories by status
  */
      
export const inventory = (params) => request.get('/store/inventory', params);
