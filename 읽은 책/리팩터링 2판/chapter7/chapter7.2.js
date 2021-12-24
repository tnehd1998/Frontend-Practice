// 7.2 컬렉션 캡슐화하기

class Person {
  get courses() {
    return this._courses;
  }
  set courses(aList) {
    this._courses = aList;
  }
}

class FixedPerson {
  get courses() {
    return this._courses.slice();
  }
  addCourse(aCourse) {}
  removeCourse(aCourse) {}
}
