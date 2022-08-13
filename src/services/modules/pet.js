import { request } from '@utils/request';


  

/**
  * uploads an image
  * @param {integer} petId - ID of pet to update    
  * @param {string} additionalMetadata - Additional data to pass to server    
  * @param {file} file - file to upload    
  */
      
export const uploadImage = (params) => request.post('/pet/{petId}/uploadImage', params);

  

/**
  * Add a new pet to the store
  * @param {} body - Pet object that needs to be added to the store    
  */
      
export const pet = (params) => request.post('/pet', params);

  

/**
  * Update an existing pet
  * @param {} body - Pet object that needs to be added to the store    
  */
      
export const pet = (params) => request.put('/pet', params);

  

/**
  * Finds Pets by status
  * @param {array} status - Status values that need to be considered for filter    
  */
      
export const findByStatus = (params) => request.get('/pet/findByStatus', params);

  

/**
  * Finds Pets by tags
  * @param {array} tags - Tags to filter by    
  */
      
export const findByTags = (params) => request.get('/pet/findByTags', params);

  

/**
  * Find pet by ID
  * @param {integer} petId - ID of pet to return    
  */
      
export const {petId} = (params) => request.get('/pet/{petId}', params);

  

/**
  * Updates a pet in the store with form data
  * @param {integer} petId - ID of pet that needs to be updated    
  * @param {string} name - Updated name of the pet    
  * @param {string} status - Updated status of the pet    
  */
      
export const {petId} = (params) => request.post('/pet/{petId}', params);

  

/**
  * Deletes a pet
  * @param {string} api_key -     
  * @param {integer} petId - Pet id to delete    
  */
      
export const {petId} = (params) => request.delete('/pet/{petId}', params);
