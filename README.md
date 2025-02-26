# 🍳 오늘 뭐 해먹지? [서버]
> **Express와 JSON-Server를 활용한 간단한 레시피 추천 API 서버**

![Node.js](https://img.shields.io/badge/Node.js-16.x-green) 
![Express](https://img.shields.io/badge/Express.js-4.x-blue)
![License](https://img.shields.io/badge/License-ISC-yellow)

## 📌 프로젝트 소개
이 프로젝트는 🍳 **[오늘 뭐 해먹지?](https://github.com/ogg1996/what-s-cooking-today)** 프로젝트에서 활용되는 API 서버입니다.

### 🚀 주요 기능
✅ **레시피 검색** (`초성 검색 지원`)  
✅ **레시피 추천** (`랜덤 추천`)  
✅ **레시피 목록 제공** (`카테고리별 페이지네이션 지원`)  
✅ **레시피 상세 정보 조회** (`재료 및 조리법 포함`)

### 🛠 사용 기술
- **Backend:** `Node.js`, `Express.js`, `json-server`
- **Utilities:** [`korean-regexp`](https://github.com/JerryKhw/korean-regexp), `lodash`, `CORS`

## 📊 데이터 출처
이 프로젝트의 데이터는 다음 출처에서 가져왔습니다:
- **출처:** [공공 데이터 포털](https://www.data.go.kr/)

## 🚀 시작하기

### 1️⃣ 설치 방법
``` bash
git clone https://github.com/ogg1996/what-s-cooking-today-server.git
cd 저장 위치
npm install
```
### 2️⃣ 실행 방법
```
npm run start
```

## 🛠 API 사용법
### 🔍 레시피 검색 API
레시피를 검색하는 기능을 제공합니다. 초성 검색도 가능합니다
- **필수 입력**: `query` (검색어)
- **선택 입력**: `page` (페이지 번호), `limit` (불러올 레시피 개수)

✅ **예제 요청**
``` http
GET /search?query=ㅅㄹㄷ&page=1&limit=3
```
🔹 **예제 응답**
``` json
{
  "total": 16,
  "page": 1,
  "limit": 3,
  "totalPages": 6,
  "data": [
    {
      "RECIPE_ID": 141,
      "NAME": "과일샐러드",
      "SUMRY": "향긋한 과일향이 너무 좋아요. 만들기도 참 쉽습니다.",
      "TYPE": "양식",
      "COOKING_TIME": "20분",
      "LEVEL": "쉬움",
      "IMG_URL": "https://aluminum-halved-bactrosaurus.glitch.me/images/basic/image_141.jpg"
    },
    {
      "RECIPE_ID": 394,
      "NAME": "닭가슴살해파리샐러드",
      "SUMRY": "영양많은 닭살에 새콤달콤 해파리를 넣어 맛있게 무쳐보세요. 손님 상차림으로 안성맞춤!",
      "TYPE": "한식",
      "COOKING_TIME": "30분",
      "LEVEL": "쉬움",
      "IMG_URL": "https://aluminum-halved-bactrosaurus.glitch.me/images/basic/image_394.jpg"
    },
    {
      "RECIPE_ID": 139,
      "NAME": "닭고기수삼샐러드",
      "SUMRY": "영양가 풍부한 닭고기와 수삼으로 고급스러운 샐러드를 만들어보세요. 즐거운 식사가 된답니다.",
      "TYPE": "한식",
      "COOKING_TIME": "60분",
      "LEVEL": "보통",
      "IMG_URL": "https://aluminum-halved-bactrosaurus.glitch.me/images/basic/image_139.jpg"
    }
  ]
}
```

### 🎲 레시피 추천 API
선택한 카테고리에서 랜덤으로 레시피 하나를 추천합니다.
- **필수 입력**: `foodType` (all, kor, chn, jpn, west, etc)

✅ **예제 요청**
``` http
GET /suggest?foodType=kor
```
🔹 **예제 응답**
``` json
{
  "RECIPE_ID": 90,
  "NAME": "오이지장아찌무침",
  "SUMRY": "아삭하게 씹히는 오이로 맛있는 오이장아찌 한번 만들어보세요.",
  "TYPE": "한식",
  "COOKING_TIME": "20분",
  "LEVEL": "보통",
  "IMG_URL": "https://aluminum-halved-bactrosaurus.glitch.me/images/basic/image_90.jpg"
}
```

### 📜 레시피 목록 API
카테고리별 레시피 목록을 가져옵니다.
- **필수 입력**: `foodType` (all, kor, chn, jpn, west, etc)
- **선택 입력**: `page` (페이지 번호), `limit` (레시피 개수)

✅ **예제 요청**
``` http
GET /list?foodType=jpn&page=2&limit=4
```
🔹 **예제 응답**
``` json
{
  "total": 23,
  "page": 2,
  "limit": 4,
  "totalPages": 6,
  "data": [
    {
      "RECIPE_ID": 127,
      "NAME": "채소말이샤브샤브",
      "SUMRY": "담백하고 깊은 맛이나는 육수에 고기와 야채를 돌돌말아 살짝 익혀먹으면 입맛이 저절로 살아나요~",
      "TYPE": "일식",
      "COOKING_TIME": "60분",
      "LEVEL": "보통",
      "IMG_URL": "https://aluminum-halved-bactrosaurus.glitch.me/images/basic/image_127.jpg"
    },
    {
      "RECIPE_ID": 197,
      "NAME": "왜된장국",
      "SUMRY": "일본식 구수한 된장국 한번 끓여볼까요? 도시락에 잘 어울려요!",
      "TYPE": "일식",
      "COOKING_TIME": "20분",
      "LEVEL": "쉬움",
      "IMG_URL": "https://aluminum-halved-bactrosaurus.glitch.me/images/basic/image_197.jpg"
    },
    {
      "RECIPE_ID": 226,
      "NAME": "생선초밥",
      "SUMRY": "싱싱한 생선을 새콤달콤 양념한 밥위에 올려 먹으면 훌륭한 일식 초밥이 되는거지요~ 정말 신선합니다!",
      "TYPE": "일식",
      "COOKING_TIME": "60분",
      "LEVEL": "어려움",
      "IMG_URL": "https://aluminum-halved-bactrosaurus.glitch.me/images/basic/image_226.jpg"
    },
    {
      "RECIPE_ID": 263,
      "NAME": "유부미역된장국",
      "SUMRY": "일본식된장국에 유부와 미역을 넣어서 색다른 맛을 느껴보세요~",
      "TYPE": "일식",
      "COOKING_TIME": "30분",
      "LEVEL": "쉬움",
      "IMG_URL": "https://aluminum-halved-bactrosaurus.glitch.me/images/basic/image_263.jpg"
    }
  ]
}
```

### 📖 레시피 상세 API
특정 레시피의 상세 정보를 가져옵니다.
- **필수 입력**: `id` (레시피의 고유 ID)

✅ **예제 요청**
``` http
GET /detail?id=1
```
🔹 **예제 응답**
``` json
{
  "basicData": {
    "RECIPE_ID": 1,
    "NAME": "나물비빔밥",
    "SUMRY": "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
    "TYPE": "한식",
    "COOKING_TIME": "60분",
    "LEVEL": "보통",
    "IMG_URL": "https://aluminum-halved-bactrosaurus.glitch.me/images/basic/image_1.jpg"
  },
  "ingredientsData": [
    {
      "ROW_NUM": 1,
      "RECIPE_ID": 1,
      "IRDNT_SN": 1,
      "IRDNT_NM": "쌀",
      "IRDNT_CPCTY": "4컵",
      "IRDNT_TY_CODE": "3060001",
      "IRDNT_TY_NM": "주재료"
    },
    {
      "ROW_NUM": 2,
      "RECIPE_ID": 1,
      "IRDNT_SN": 2,
      "IRDNT_NM": "안심",
      "IRDNT_CPCTY": "200g",
      "IRDNT_TY_CODE": "3060001",
      "IRDNT_TY_NM": "주재료"
    },
    ...
  ],
  "cookingData": [
    {
      "RECIPE_ID": 1,
      "STEP": 1,
      "DESC": "양지머리로 육수를 낸 후 식혀 기름을 걷어낸 후, 불린 쌀을 넣어 고슬고슬하게 밥을 짓는다.",
      "STEP_TIP": "",
      "IMG_URL": "https://aluminum-halved-bactrosaurus.glitch.me/images/cooking/image_1_1.jpg"
    },
    {
      "RECIPE_ID": 1,
      "STEP": 2,
      "DESC": "안심은 불고기 양념하여 30분간 재워 국물 없이 구워 한 김 식으면 한입 크기로 자른다.",
      "STEP_TIP": "",
      "IMG_URL": "https://aluminum-halved-bactrosaurus.glitch.me/images/cooking/image_1_2.jpg"
    },
    ...
  ]
}
```

## 🌍 배포 URL
이 프로젝트는 다음 URL에서 사용할 수 있습니다:

🔗 **Base URL:** [`https://aluminum-halved-bactrosaurus.glitch.me`](https://aluminum-halved-bactrosaurus.glitch.me)

### 📡 주요 API 엔드포인트
| 기능 | 엔드포인트 |
|------|------------|
| **레시피 검색** | [`https://aluminum-halved-bactrosaurus.glitch.me/search?query=ㅅㄹㄷ&page=1&limit=3`](https://aluminum-halved-bactrosaurus.glitch.me/search?query=ㅅㄹㄷ&page=1&limit=3) |
| **랜덤 추천** | [`https://aluminum-halved-bactrosaurus.glitch.me/suggest?foodType=kor`](https://aluminum-halved-bactrosaurus.glitch.me/suggest?foodType=kor) |
| **레시피 목록** | [`https://aluminum-halved-bactrosaurus.glitch.me/list?foodType=jpn&page=2&limit=5`](https://aluminum-halved-bactrosaurus.glitch.me/list?foodType=jpn&page=2&limit=5) |
| **레시피 상세** | [`https://aluminum-halved-bactrosaurus.glitch.me/detail?id=1`](https://aluminum-halved-bactrosaurus.glitch.me/detail?id=1) |

📌 **Glitch 서버 사용 안내**
- 이 프로젝트는 **Glitch 무료 플랜**을 사용하여 배포되었습니다.
- **서버가 유휴 상태(비활성화)일 경우, 첫 요청 시 최대 1분 정도 걸릴 수 있습니다.**  
  (서버가 "깨어나는" 동안 대기 시간이 발생할 수 있음)
- 이후 요청은 **빠르게 응답**됩니다.

🔹 **Tip:** 미리 한 번 API를 호출해두면 서버가 활성화된 상태로 유지될 수 있습니다. 🚀
