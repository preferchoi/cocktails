# cocktails

사용한 데이터 셋: [kaggle dataset](https://www.kaggle.com/datasets/ai-first/cocktail-ingredients)

### 기능 명세

1. 칵테일 리스트 데이터를 확인할 수 있어야 한다.
2. 칵테일 상세 데이터를 확인할 수 있어야 한다.
3. graphQL을 활용해서 서버를 구현해야 한다.

```
$ npm init -y -p
$ npm install eslint prettier eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

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
