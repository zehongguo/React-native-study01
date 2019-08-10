import Mock from 'mockjs';

let data = Mock.mock({
  "code": 200,
  "errMsg": "",
  "data": {
    "imgInfo|6": [{
      "text": '@ctitle(4,6)',
      "imgUrl": '@image("100x100")',
    }]
  }
});

Mock.mock('/getImg', 'get', data);