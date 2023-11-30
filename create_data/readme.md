## 설명

데이터 컬럼은 총 4가지입니다.
drinks, category_data, glass_data, ingredients_data 로 구성되어 있습니다.

### drinks

칵테일 관련 상세 데이터입니다. 이름을 키로 가지고 있습니다.
데이터는 아래의 구조로 되어 있습니다.

```
name: {
    name(이름),
    img_path(이미지 경로),
    alcoholic(알콜/논알콜),
    ingredients(재료),
    instructions(제조법)
}
```

### category_data

칵테일 카테고리 데이터입니다. 카테고리 이름을 키로 가지고 있습니다.
데이터는 아래의 구조로 되어 있습니다.

```
name: {
    name(이름)
}
```

### glass_data

칵테일 잔 데이터입니다. 잔 이름을 키로 가지고 있습니다.
데이터는 아래의 구조로 되어 있습니다.

```
name: {
    name(이름)
}
```

### ingredients_data

칵테일 재료 데이터입니다. 재료 이름을 키로 가지고 있습니다.
데이터는 아래의 구조로 되어 있습니다.

```
name: {
    name(이름)
}
```
