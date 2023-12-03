# cocktails

사용한 데이터 셋: [kaggle dataset](https://www.kaggle.com/datasets/ai-first/cocktail-ingredients)

### 기능 명세

1. 칵테일 리스트 데이터를 확인할 수 있어야 한다.
2. 칵테일 상세 데이터를 확인할 수 있어야 한다.
3. graphQL을 활용해서 서버를 구현해야 한다.
4. 카테고리, 잔, 재료와 같은 데이터를 이용해 칵테일 리스트를 필터링 할 수 있어야 한다.
<hr/>

### 추가

5.  재료 상세 페이지에서 해당 재료를 통해 만들 수 있는 칵테일 목록을 확인할 수 있어야 한다.
6.  회원 기능을 사용할 수 있어야 한다.
7.  마이페이지에서 보유하고 있는 재료 목록을 확인할 수 있어야 한다.
8.  마이페이지에서 가지고 있는 재료들로 만들 수 있는 칵테일 목록을 확인할 수 있어야 한다.

## 프로젝트 실행

```
// ./server 경로에서
npm install
npm start

// ./web 경로에서
npm install
npm start
```

## 프로젝트 소개

**graphQL** 기술을 활용하여 만든 **express.js** 서버와, **react.js** 클라이언트로 이루어진 칵테일 웹 입니다.

이 프로젝트에서는 캐글의 [cocktail-ingredients](https://www.kaggle.com/datasets/ai-first/cocktail-ingredients) 데이터셋을 활용했습니다.

## 제작 과정 중에서 발생한 생각들

### [데이터 설계 추가](https://github.com/preferchoi/cocktails/commit/af7eeb7f0b66e53713700c896ee75273444914c0)

Drink 데이터에 두 요소(category, glass)를 추가했다. 해당 수정으로 인해, 두 요소를 키로 사용하여 필터링이 가능해졌다.
이는 데이터 설계 시점에서 당연히 해야 될 것이었다고 생각하는데, 급하게 만드느라 시행착오가 있었다고 생각된다.
이 변경으로 인해, 리졸버 또한 수정이 있었다. [링크](https://github.com/preferchoi/cocktails/commit/03846d162e1292578c3c3008b7ad09feecc35ef8)
각 단일 요소 검색 리졸버에서 해당 요소를 참조할 수 있는 Drink 요소를 같이 표시하는 기능을 수행하도록 하였다.

### [API 설계 변경](https://github.com/preferchoi/cocktails/commit/697297f1379ab19980c44d61fec84eeea99acb93)

쿼리 설계를 대규모 변경했다. 이전의 API 배치는 각 요소(Category, Glass, Ingredient)가 단일 검색할 때, 해당 요소를 참조하는 Drink 요소 리스트를 불러오게 하였다. 하지만, 이는 비 효율적인 코드라 생각되어 코드를 수정하였다.
수정 내용은 다음과 같다. 이미 Drink에서 요소 목록 전체를 불러오는데, 각 요소를 변수로 삼고, 변수의 입력을 조건문을 통해 확인하고 필요한 데이터를 제공하게끔 하였다.
아래와 같이, Category, Glass, Ingredient에 분리되어있던 리졸버를 Drinks 하나에 통합했다.

```
    Drinks: (_, { CategoryName, GlassName, IngredientName }) => {
      if (CategoryName) {
        return cocktailData.drinks.filter(drink => drink.category == CategoryName)
      } else if (GlassName) {
        return cocktailData.drinks.filter(drink => drink.glass == GlassName)
      } else if (IngredientName) {
        return cocktailData.drinks.filter(drink => drink.ingredients.some(ingredient => ingredient[0] == IngredientName))
      } else {
        return cocktailData.drinks
      }
    },
```

추후에는 이를 조금 더 발전시켜, 다중 요소에 대해 필터링을 제공할 수 있게끔 할 것이다.

앞선 변경으로 인해, Category, Glass, Ingredient 요소의 단일 스키마가 제거되었다. 이 변경은 해당 데이터에 이름만 존재하기 때문에 적용되었는데, 추후 데이터 추가나 수정으로 해당 요소의 볼륨이 증가할 경우 추가할 수 있도록 하겠다.

### [다중 필터를 이용한 검색 기능 적용](https://github.com/preferchoi/cocktails/commit/9bae821049f6f2625b1f7bf659248199bec14551)

if조건문을 변경해 return을 마지막에 한 번만 실행할 수 있게 변경하였고, 필터가 여러 개 있을 경우 필터링을 진행한 내용에 대해 나머지 필터링을 진행할 수 있게 만들었다. 이 경우 필터가 늘어날 수록 필터링을 진행하는 데이터의 양이 줄어들기 때문에, 검색 시간의 일관성이 유지될 것이라 생각된다.

```
Drinks: (_, { CategoryName, GlassName, IngredientName }) => {
  let drinks = cocktailData.drinks
  if (CategoryName) {
    drinks = drinks.filter(drink => drink.category == CategoryName)
  }
  if (GlassName) {
    drinks = drinks.filter(drink => drink.glass == GlassName)
  }
  if (IngredientName) {
    drinks = drinks.filter(drink => drink.ingredients.some(ingredient => ingredient[0] == IngredientName))
  }
  return drinks
},
```

### [페이지네이션 구현](https://github.com/preferchoi/cocktails/commit/88f65c7b9e5ea9a8b18a7791e7ffe09cd238c57d)

1. cursor를 추가하여 데이터 위치를 저장할 수 있게 사용했다. 전송하는 데이터는 고정된 것이 아닌, 필터링에 따라 데이터의 양이 변경되기 때문에 필터링한 결과의 index 값을 cursor로 지정했다.

2. [react-waypoint](https://github.com/preferchoi/cocktails/commit/6565635251c8ac61e317323f51ee1d3f1856ed01)라이브러리를 사용해서 무한 스크롤 기능으로 페이지네이션을 구현하였다.

3. 개발 도중, 네트워크 로그 상으로 데이터가 잘 불러와지지만 표기가 안 되는 일이 있었다. 문서를 확인해 보니, 원인은 [apollo-cache](https://github.com/preferchoi/cocktails/commit/39337272af615dd210aa1ce4395357c84a6ebc2a)의 병합 처리 조건을 지정하지 않아서였는다. 새롭게 온 데이터를 기존 캐시 데이터에 병합해 하나의 캐시로 사용할 수 있는 처리를 진행하였다.

4. keyArgs를 false로 설정했기 때문에 다른 파라미터여도 캐시 키가 동일하게 처리되었다. keyArgs 속성에 "CategoryName", "GlassName", "IngredientName"을 추가하여 각각 [다른 캐시 키를 사용하게끔 설정](https://github.com/preferchoi/cocktails/commit/ed9579ba96c9354079b8f050a57e397be54cb3cf)했다.

### [~~오버 페칭 문제~~ 진행중]()

현 상태에서는 목록을 불러올 때, drink의 모든 데이터를 불러오고 있다. 이는 graphQL의 강점인 오버페칭/언더페칭을 해결할 수 있다는 점을 활용하지 못하고 있는 것이다. 현재는 개발 과정 중이기 때문에, 어떤 데이터가 필요할지, 필요하지 않을 지 모르기에 이렇게 진행하고 있는데, 추후에 클라이언트 단에서 query를 수정해 이를 변경해야 할 것이다.
