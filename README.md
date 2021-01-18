# React + Typescript + Mobx

## install

```shell
yarn add mobx mobx-react
```

## MobX 개념

- Observable (관찰받고 있는 state)
  - 리엑트 안에서 사용되는 글로벌 상태를 직접 변경하여 어떻게 상태가 변경 됐는지 파악하는 요소
  - Observable이 적용 된 state가 변경되면 observer한테 알려줌
- Computed Value (연산된 값)
  - 이벤트 발생으로 인해 어떠한 연산에 필요로 하는 state에 변화가 생겼을 때, 그 state 변화에 따라서 새로운 연산 작업을 수행하게 된다.
  - 해당 state에 변화가 없으면, 그냥 기존의 값을 사용한다.
- Actions (액션)
  - 상태에 어떻게 변화를 일으킬 것인지 정의하는 부분

## 구조

- mobx로 만든 store를 context api와 같이 사용하여 hooks 문법을 사용
