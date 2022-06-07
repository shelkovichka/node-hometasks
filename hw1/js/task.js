'use strict'

// 1

function pause(func, time){
    return function(){
        setTimeout(func, time)
    }
}

function func() {
    console.log('Функция выполнилась с задержкой в 2 секунды!');
}
let paused = pause(func, 2000);
paused();

// 2

function returnObj(func, ...args){
    return function(){
        let obj = {}
        for (let i = 0; i < args.length; i++) {
            let key = args[i];
            let value = func()[i];
            obj[key] = value;
        } 
        return obj
    } 
}

// 3

let courses = [
    { name: 'Courses in England', prices: [0, 100] },  
    { name: 'Courses in Germany', prices: [500, null] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in France', prices: [null, null] },
];

function requiredRange1(arr) {
    let someCourses = [];
    for (let course of courses) {
        if (course.prices[0] <= 100 
            && course.prices[1] <= 100) {
            someCourses.push(course.name)
        } 
    } return someCourses
}

function requiredRange2(arr) {
    let someCourses = [];
    for (let course of courses) {
        if (course.prices[0] >= 100 
            && course.prices[0] <= 350 
            && course.prices[1] <= 350) {
            someCourses.push(course.name)
        }
    } return someCourses
}
function requiredRange3(arr) {
    let someCourses = [];
    for (let course of courses) {
        if (course.prices[0] == 200
            && course.prices[1] <= 200) {
            someCourses.push(course.name)
        }
    } return someCourses
}

console.log(requiredRange1(courses))
console.log(requiredRange2(courses))
console.log(requiredRange3(courses))