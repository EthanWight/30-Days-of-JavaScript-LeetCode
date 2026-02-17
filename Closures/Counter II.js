/**
 * @param {integer} init
 * @return {{increment: function(): number, decrement: function(): number, reset: function(): Intl.NumberFormatPartTypeRegistry.integer}}
 */
var createCounter = function(init) {
    let temp = init;
    function increment(){
        return ++temp;
    }
    function decrement(){
        return --temp;
    }
    function reset(){
        return temp = init;
    }
    return {increment, decrement, reset};
};


const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4