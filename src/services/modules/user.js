import { request } from '@utils/request';


  

/**
  * Creates list of users with given input array
  * @param {} body - List of user object    
  */
      
export const createWithArray = (params) => request.post('/user/createWithArray', params);

  

/**
  * Creates list of users with given input array
  * @param {} body - List of user object    
  */
      
export const createWithList = (params) => request.post('/user/createWithList', params);

  

/**
  * Get user by user name
  * @param {string} username - The name that needs to be fetched. Use user1 for testing.     
  */
      
export const {username} = (params) => request.get('/user/{username}', params);

  

/**
  * Updated user
  * @param {string} username - name that need to be updated    
  * @param {} body - Updated user object    
  */
      
export const {username} = (params) => request.put('/user/{username}', params);

  

/**
  * Delete user
  * @param {string} username - The name that needs to be deleted    
  */
      
export const {username} = (params) => request.delete('/user/{username}', params);

  

/**
  * Logs user into the system
  * @param {string} username - The user name for login    
  * @param {string} password - The password for login in clear text    
  */
      
export const login = (params) => request.get('/user/login', params);

  

/**
  * Logs out current logged in user session
  */
      
export const logout = (params) => request.get('/user/logout', params);

  

/**
  * Create user
  * @param {} body - Created user object    
  */
      
export const user = (params) => request.post('/user', params);
