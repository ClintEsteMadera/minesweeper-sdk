# Minesweeper2020.UsersApi

All URIs are relative to *https://minesweeper2020.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **POST** /api/users | 



## createUser

> User createUser(userDTO)



Creates a new User

### Example

```javascript
import Minesweeper2020 from 'minesweeper_2020';

let apiInstance = new Minesweeper2020.UsersApi();
let userDTO = new Minesweeper2020.UserDTO(); // UserDTO | 
apiInstance.createUser(userDTO).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userDTO** | [**UserDTO**](UserDTO.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

