/* 
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

// Your code here (and the code from the previous exercise)
class Group {
  constructor(arr = []){
    this.groupMembers = arr;
  }
   add(value){
    if (!this.groupMembers.includes(value)){
      this.groupMembers.push(value);
    }
   }
   delete(value){
   this.groupMembers = this.groupMembers.filter((x) => x !== value);
   }
   has(value){
    return this.groupMembers.includes(value);
   }
   static from(iterable){
    let builtArray = [];
    for (let element of iterable){
      builtArray.push(element);
    }
    return new Group(builtArray);
   }
   [Symbol.iterator](){
    return new GroupIterator(this);
   }
  }
 
  class GroupIterator{
    constructor(group){
      this.currentIndex = 0;
      this.group = group;
    }
    next(){
      if (this.currentIndex == this.group.groupMembers.length) return {done: true};
      let value = this.group.groupMembers[this.currentIndex];
      this.currentIndex++;
      return {value, done : false};
    }
  }


// Tests:
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c