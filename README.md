# React + Typescript + Mobx

## install

```shell
yarn add mobx mobx-react-lite
```

## MobX 개념

- Observable (관찰받고 있는 state)
  - 리엑트 안에서 사용되는 글로벌 상태를 직접 변경하여 어떻게 상태가 변경 됐는지 파악하는 요소
  - Observable이 적용 된 state가 변경되면 observer한테 알려줌
  - options:
    - .deep:
      - observable 기본 옵션
      - Object, Map, Set인 경우 작동
      - 오브젝트를 deep 하게 변경 된 값을 감지함
    - .ref:
      - 레퍼런스가 변경된 경우에만 감지
      - 가장 함수형 프로그래밍 패러다임에 맞는 옵션
    - .shallow:
      - deep 과 반대로 얕은 검사를 함
      - 주로 Collection에 사용 add, push, delete때 감지, 컬랙션 안 요소가 변해도 감지하지 않음
- Computed Value (연산된 값)
  - 이벤트 발생으로 인해 어떠한 연산에 필요로 하는 state에 변화가 생겼을 때, 그 state 변화에 따라서 새로운 연산 작업을 수행하게 된다.
  - 해당 state에 변화가 없으면, 그냥 기존의 값을 사용한다.
- Actions (액션)

  - 상태에 어떻게 변화를 일으킬 것인지 정의하는 부분
  - action

    - 기본적으로 action 함수가 종료 될 때 바뀐 값을 한 번에 observer시킴
    - runInAction
      - makeObservable, makeAutoObservable 외부에서 state를 변경할 때 사용
    - Asynchronous actions

      - flow:
        - 제너레이터로 작동 됨
        - ts에서 타입 추론을 위해 mobx-state-tree package에 toGenerator 함수를 사용 할 수 있음

- Reactions
  - state가 변경 되었을 때마다 반응
  - autorun
    - autorun(effect: (reaction) => void)
    - autorun 안에 사용 된 Observable 의 state가 변경 감지 되면 호출 됨
  - Reaction
    - reaction(() => value, (value, previousValue, reaction) => { sideEffect }, options?)
    - value로 설정한 state가 변경 될 때 호출 됨
  - When
    - when(predicate: () => boolean, effect?: () => void, options?)
    - predicate가 true가 되면 effect함수 호출
    - when(predicate: () => boolean, options?): Promise
    - predicate가 true가 되면 promise resolve

## 구조

- mobx로 만든 store를 context api와 같이 사용하여 hooks 문법을 사용
