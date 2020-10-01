# Minesweeper2020.GamesApi

All URIs are relative to *https://minesweeper2020.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGame**](GamesApi.md#createGame) | **POST** /api/games | 
[**findGameById**](GamesApi.md#findGameById) | **GET** /api/games/{gameId} | 
[**updateGame**](GamesApi.md#updateGame) | **PATCH** /api/games/{gameId} | 



## createGame

> Game createGame(gameCreationData)



Creates a new game for an existing User

### Example

```javascript
import Minesweeper2020 from 'minesweeper_2020';

let apiInstance = new Minesweeper2020.GamesApi();
let gameCreationData = new Minesweeper2020.GameCreationData(); // GameCreationData | 
apiInstance.createGame(gameCreationData).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCreationData** | [**GameCreationData**](GameCreationData.md)|  | 

### Return type

[**Game**](Game.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## findGameById

> Game findGameById(gameId)



Finds a Game by ID

### Example

```javascript
import Minesweeper2020 from 'minesweeper_2020';

let apiInstance = new Minesweeper2020.GamesApi();
let gameId = null; // String | 
apiInstance.findGameById(gameId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**String**](.md)|  | 

### Return type

[**Game**](Game.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateGame

> Game updateGame(gameId, gameUpdate)



Updates an existing Game, by performing individual updates to the board&#39;s cells

### Example

```javascript
import Minesweeper2020 from 'minesweeper_2020';

let apiInstance = new Minesweeper2020.GamesApi();
let gameId = null; // String | 
let gameUpdate = new Minesweeper2020.GameUpdate(); // GameUpdate | 
apiInstance.updateGame(gameId, gameUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**String**](.md)|  | 
 **gameUpdate** | [**GameUpdate**](GameUpdate.md)|  | 

### Return type

[**Game**](Game.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

