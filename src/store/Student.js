// import { cosh } from 'core-js/core/number';
import { createStore } from 'vuex'

const store = createStore({
    state: { // 프로젝트 전체에서 공통으로 사용할 변수를 정의, 모든 컴포넌트에서 사용 가능
        studentList: new Array
    },
    mutations: { // setter 기능(state를 변경시키는 역할)
        addStu(state, obj) { // (state를 가리킨다, 받는 값)
            if (state.studentList.length == 0) {
                state.studentList.push(obj);
            } else {
                for (let i = 0; i < state.studentList.length; i++) {
                    if (state.studentList[i].name == obj.name) {
                        alert("중복된 이름이 존재합니다.");
                        state.studentList.splice(i, 1);
                    } 
                } state.studentList.push(obj);
            }

        },
        modiStu(state, obj) {

            for (let i = 0; i < state.studentList.length; i++) {
                if (state.studentList[i].name == obj.name) {
                    state.studentList[i].kor = obj.kor;
                    state.studentList[i].eng = obj.eng;
                    state.studentList[i].mat = obj.mat;
                    return;
                }
            }
        }
    },
    getters: {
        getStudentList(state) {
            return state.studentList;
        }
    }
})

export default store;